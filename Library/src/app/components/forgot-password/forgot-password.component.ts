import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/User/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user: User = new User (0,"","","");
  forgotPassword: FormGroup = new FormGroup ({
    email: new FormControl(null,[Validators.required])
  })
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  onCancel():void{
    this._router.navigateByUrl("/home")
  }

}
