import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { Ecc, QrCode } from './qrcode-generator'

@Component({
  selector: 'qrcode-svg',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      stroke="none"
      [attr.alt]="alt()"
      [attr.aria-label]="ariaLabel()"
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.viewBox]="viewBox()"
    >
      <rect width="100%" height="100%" [attr.fill]="backgroundColor()" />
      <path [attr.d]="d()" [attr.fill]="foregroundColor()" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrcodeSvgComponent {
  value = input.required<string>()
  ecl = input<'low' | 'medium' | 'quartile' | 'high'>('medium')
  borderSize = input<number>(2)
  size = input<string | number>(250)

  backgroundColor = input<string>('#FFFFFF')
  foregroundColor = input<string>('#000000')

  alt = input<string>()
  ariaLabel = input<string>()

  viewBox = computed(() => {
    const s = this.qr().size + this.borderSize() * 2
    return `0 0 ${s} ${s}`
  })
  d = computed(() => {
    return this.createD(this.qr(), this.borderSize())
  })

  private qr = computed(() => {
    return QrCode.encodeText(this.value(), Ecc[this.ecl()])
  })

  private createD(qr: QrCode, borderSize: number): string {
    const parts: string[] = []
    for (let y = 0; y < qr.size; y++) {
      for (let x = 0; x < qr.size; x++) {
        if (qr.getModule(x, y)) parts.push(`M${x + borderSize},${y + borderSize}h1v1h-1z`)
      }
    }
    return parts.join(' ')
  }
}
