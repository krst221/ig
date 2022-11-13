import { upcoming } from './../models/upcoming.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  elem1: upcoming = {
    date: 'Mañana',
    name: 'Gotham Knights',
    imgUrl: '../../../assets/img/gothambg.jpg',
    discount: '36',
    price: '44.69'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
