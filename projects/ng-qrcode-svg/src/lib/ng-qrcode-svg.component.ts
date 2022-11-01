import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Ecc, QrCode } from './qrcode-generator';

const VALID_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

@Component({
  selector: 'ng-qrcode-svg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      stroke="none"
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
export class NgQrcodeSvgComponent implements OnInit {
  @Input() value!: string;

  @Input() ecc: 'LOW' | 'MEDIUM' | 'QUARTILE' | 'HIGH' = 'MEDIUM';
  @Input() borderSize = 2;
  @Input() size = '200px';

  @Input() backgroundColor = '#FFFFFF';
  @Input() foregroundColor = '#000000';

  qr!: QrCode;
  viewBox!: string;
  d!: string;

  ngOnInit(): void {
    this.validateInputs();

    this.qr = QrCode.encodeText(this.value, Ecc[this.ecc]);
    const size = this.qr.size + this.borderSize * 2;
    this.viewBox = `0 0 ${size} ${size}`;
    this.d = this.createD(this.borderSize);
  }

  private validateInputs(): void {
    if (!this.value) throw Error('[@larscom/ng-qrcode-svg] You must provide a value!');

    if (!VALID_COLOR_REGEX.test(this.backgroundColor))
      throw Error('[@larscom/ng-qrcode-svg] You must provide a valid backgroundColor (RGBA HEX color: eg: #FFFFFF)');

    if (!VALID_COLOR_REGEX.test(this.foregroundColor))
      throw Error('[@larscom/ng-qrcode-svg] You must provide a valid foregroundColor (RGBA HEX color: eg: #000000)');
  }

  private createD(borderSize: number): string {
    const parts: string[] = [];
    for (let y = 0; y < this.qr.size; y++) {
      for (let x = 0; x < this.qr.size; x++) {
        if (this.qr.getModule(x, y)) parts.push(`M${x + borderSize},${y + borderSize}h1v1h-1z`);
      }
    }
    return parts.join(' ');
  }
}
