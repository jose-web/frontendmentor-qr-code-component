import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
