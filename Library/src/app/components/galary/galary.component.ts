import { Component, OnInit } from '@angular/core';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'src/app/classes/image';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images:Image[] = [
    {imageId:1,url:'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},
    {imageId:2,url:'https://images.unsplash.com/photo-1588580000645-4562a6d2c839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'},
    {imageId:3,url:'https://media.istockphoto.com/photos/university-students-in-classroom-after-lecture-picture-id1348870264?b=1&k=20&m=1348870264&s=170667a&w=0&h=ezpMeLjppEvTpytnt6Vj5clxIrZFqb0ze2ejikxgtMg='},
    {imageId:4,url:'https://images.unsplash.com/photo-1601330676094-f67a35e167db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'},
    {imageId:5,url:'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'},
    {imageId:6,url:'https://images.unsplash.com/photo-1477238134895-98438ad85c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeSUyMGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'}
  ]
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
