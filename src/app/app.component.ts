import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textQR = 'https://www.frontendmentor.io/profile/jose-web'
  
  changeQR(event:any){
    this.textQR = event.target.value
  }
}
