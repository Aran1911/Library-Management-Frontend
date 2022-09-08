import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(0,"","","");
  constructor( private _userService: UserService, private _router: Router) { }

  loginForm: FormGroup<any> = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
  })

  currentUser: boolean = false;
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


  onSubmit() {
    this._userService.login(this.loginForm.get("username")?.value,this.loginForm.get("password")?.value).subscribe( resp=>{
      console.log(resp)
      if(resp) {
        sessionStorage.setItem("username", this.loginForm.get("username")?.value);
        this._router.navigateByUrl("/home");
        this.currentUser=false;
      } else {
        this.currentUser = true;
      }
    },error => {
      this.currentUser = true;
      alert(error.message);
    }

    )
  }
  
}
