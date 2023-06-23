import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { QRCodeModule } from 'angularx-qrcode';

// COMPONENTS
import { QrCodeComponent } from 'src/components/qr-code/qr-code.component';

@NgModule({
  declarations: [
    AppComponent,

    // COMPONENTS
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
