import { Component, OnInit } from '@angular/core';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQrcode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log();
  }
  viewMode: any;
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
