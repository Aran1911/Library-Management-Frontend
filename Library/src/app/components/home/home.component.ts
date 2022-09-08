import { Component, OnInit } from '@angular/core';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQrcode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
