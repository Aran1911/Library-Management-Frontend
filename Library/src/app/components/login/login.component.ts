import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required])  ,
    password: new FormControl(null,[Validators.required])
  })
  currentUser = false;
  hide = true;
  /*
  login() {
    console.log(this.loginForm.get('username')?.value+ this.loginForm.get('password')?.value)
    if( this.loginForm.get('username')?.value == 'Admin' && this.loginForm.get('password')?.value =='Admin123') {
      this._router.navigateByUrl('/dashboard');
    } else {
      alert("Wrong credentials")
    }
  }
  */

  constructor( private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
  }
  login() {
    this._userService
      .login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(
        (resp) => {
          /*console.log(resp); */
          if (resp) {
            sessionStorage.setItem(
              'username',
              this.loginForm.get('username')?.value
            );
            this._router.navigateByUrl('/dashboard/home');
            // console.log(this.loginForm.get('username')?.value+
            // this.loginForm.get('password')?.value)
            this.currentUser = false;
          } else {
            this.currentUser = true;
          }
        },
        (error) => {
          this.currentUser = true;
          alert("You enterd the wrong password or wrong username."+
          "Please check the username and password");
        }
      );
  }
}
