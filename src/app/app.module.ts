import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgQrcodeSvgModule } from '@larscom/ng-qrcode-svg';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgQrcodeSvgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
