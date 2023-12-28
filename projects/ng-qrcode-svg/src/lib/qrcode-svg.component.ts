import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Ecc, QrCode } from './qrcode-generator'

const VALID_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/

@Component({
  selector: 'qrcode-svg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      stroke="none"
      [attr.alt]="alt"
      [attr.aria-label]="ariaLabel"
      [attr.width]="size"
      [attr.height]="size"
      [attr.viewBox]="viewBox"
    >
      <rect width="100%" height="100%" [attr.fill]="backgroundColor" />
      <path [attr.d]="d" [attr.fill]="foregroundColor" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrcodeSvgComponent implements OnChanges {
  @Input() value!: string
  @Input() ecl: 'low' | 'medium' | 'quartile' | 'high' = 'medium'
  @Input() borderSize = 2

  @Input() size: string | number = 250
  @Input() backgroundColor = '#FFFFFF'
  @Input() foregroundColor = '#000000'

  @Input() alt: string | undefined
  @Input() ariaLabel: string | undefined

  private qr!: QrCode

  viewBox!: string
  d!: string

  ngOnChanges(changes: SimpleChanges): void {
    this.validateInputs()

    if (this.skipUpdate(changes)) return

    this.qr = QrCode.encodeText(this.value, Ecc[this.ecl])
    const s = this.qr.size + this.borderSize * 2
    this.viewBox = `0 0 ${s} ${s}`
    this.d = this.createD(this.borderSize)
  }

  private validateInputs(): void {
    if (!this.value) throw Error('[@larscom/ng-qrcode-svg] You must provide a value!')

    if (!VALID_COLOR_REGEX.test(this.backgroundColor))
      throw Error('[@larscom/ng-qrcode-svg] You must provide a valid backgroundColor (HEX RGB) eg: #FFFFFF')

    if (!VALID_COLOR_REGEX.test(this.foregroundColor))
      throw Error('[@larscom/ng-qrcode-svg] You must provide a valid foregroundColor (HEX RGB) eg: #000000')
  }

  private skipUpdate({ backgroundColor, foregroundColor, size }: SimpleChanges): boolean {
    const bgColorChanged = backgroundColor?.currentValue && !backgroundColor?.firstChange
    const fgColorChanged = foregroundColor?.currentValue && !foregroundColor.firstChange
    const sizeChanged = size?.currentValue && !size.firstChange

    return bgColorChanged || fgColorChanged || sizeChanged
  }

  private createD(borderSize: number): string {
    const parts: string[] = []
    for (let y = 0; y < this.qr.size; y++) {
      for (let x = 0; x < this.qr.size; x++) {
        if (this.qr.getModule(x, y)) parts.push(`M${x + borderSize},${y + borderSize}h1v1h-1z`)
      }
    }
    return parts.join(' ')
  }
}
