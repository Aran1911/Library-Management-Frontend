import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new User (0,"","","");

  constructor(private _service:UserService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    let email: string = '';
    this._activatedRouter.params.subscribe(data => {
      email = data['email'];
      this._service.getByEmail(email).subscribe(resp => {
        this.user = resp;
      })
    })
  }

  onsubmit(): void {
    this._service.update(this.user).subscribe(data => {
      alert("User details updated");
      this._router.navigateByUrl("/login");
    },
    error => {
      alert ("User details updation is failed")
    })
  }
}
