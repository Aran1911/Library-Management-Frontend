import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username = sessionStorage.getItem('username')
  date: Date | undefined;
  constructor( ) {
    setInterval(() => {
      this.date = new Date()
    })
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  
  logout() {
    sessionStorage.clear
  }
  user= faUser;
  circle = faCircle;

}
