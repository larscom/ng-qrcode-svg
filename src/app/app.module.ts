import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QrcodeSvgModule } from '@larscom/ng-qrcode-svg';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QrcodeSvgModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
