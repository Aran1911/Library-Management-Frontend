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
    { id: 1, name: 'Balakrishna Palla', shortName: 'BP', details: [] },
    { id: 2, name: 'Ajay Bhosekar', shortName:'AB', details: [] },
  ];

  team: Team[] = [
    { id: 3, name: 'Chamoth Mendis', shortName: 'CM', details: [] },
    { id: 4, name: 'Dulami', shortName: 'D', details: [] },
    { id: 5, name: 'Rashmi', shortName: 'R', details: [] },
    { id: 6, name: 'Imasha De Saram', shortName: 'ID', details: [] },
    { id: 7, name: 'Maran.C', shortName: 'MC', details: [] },
  ];
}
