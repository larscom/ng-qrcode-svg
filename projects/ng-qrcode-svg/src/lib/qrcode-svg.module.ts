import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QrcodeSvgComponent } from './qrcode-svg.component';

@NgModule({
  declarations: [QrcodeSvgComponent],
  imports: [CommonModule],
  exports: [QrcodeSvgComponent]
})
export class QrcodeSvgModule {}
