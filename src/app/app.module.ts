import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { QrcodeSvgComponent } from '@larscom/ng-qrcode-svg'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, QrcodeSvgComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
