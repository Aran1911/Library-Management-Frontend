import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/classes/team';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teamg: Team[] = [
    { id: 1, name: 'Balakrishna Palla', role: '', details: [] },
    { id: 2, name: 'Ajay Bhosekar', role: '', details: [] },
  ];

  team: Team[] = [
    { id: 3, name: 'Chamoth Mendis', role: 'Team Leader', details: [] },
    { id: 4, name: 'Dulami', role: '', details: [] },
    { id: 5, name: 'Rashmi', role: '', details: [] },
    { id: 6, name: 'Imasha De Saram', role: '', details: [] },
    { id: 7, name: 'Maran.C', role: '', details: [] },
  ];
}
