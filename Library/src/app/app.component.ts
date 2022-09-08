import { Component } from '@angular/core';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date:Date | undefined;
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
  title = 'Library';
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faQrcode = faQrcode;
  faLinkedin = faLinkedin;
  faLinkedinIn = faLinkedinIn;
  faPinterest = faPinterest;
  
}
