import { titlebar } from './../models/titlebar.model';
import { gamebox } from './../models/gamebox.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  tit1: titlebar = {
    h2: 'Tendencias',
    btn: 'Ver todo'
  }

  tit2: titlebar = {
    h2: 'Reservas',
    btn: 'Ver todo'
  }

  t1: gamebox = {
    name: 'Gotham Knights',
    imgUrl: '../../assets/img/gotham.jpg',
    videoUrl: '../../assets/video/gotham.webm',
    price: '44.69€',
    discount: '26',
    dlc: false,
    reserved: false,
    rdays: '0',
    platform: ''
  }

  t2: gamebox = {
    name: 'Uncharted Legacy of Thievs Collection',
    imgUrl: '../../assets/img/unchl.jpg',
    videoUrl: '../../assets/video/unchl.webm',
    price: '34.49€',
    discount: '31',
    dlc: false,
    reserved: false,
    rdays: '0',
    platform: ''
  }

  t3: gamebox = {
    name: 'Los Sims 4 Años High School',
    imgUrl: '../../assets/img/sims.jpg',
    videoUrl: '../../assets/video/sims.webm',
    price: '28.49€',
    discount: '28',
    dlc: true,
    reserved: false,
    rdays: '0',
    platform: ''
  }

  r2: gamebox = {
    name: 'Football Manager 2023',
    imgUrl: '../../assets/img/football.jpg',
    videoUrl: '../../assets/video/football.webm',
    price: '39.49€',
    discount: '34',
    dlc: false,
    reserved: true,
    rdays: '15',
    platform: ''
  }

  r1: gamebox = {
    name: 'Victoria 3 Grand Edition',
    imgUrl: '../../assets/img/victoria.jpg',
    videoUrl: '../../assets/video/victoria.webm',
    price: '43.89€',
    discount: '45',
    dlc: true,
    reserved: true,
    rdays: '2',
    platform: ''
  }

  r3: gamebox = {
    name: 'Call of Duty: Modern Warfare II Vault Edition (Xbox ONE / Xbox Series X|S)',
    imgUrl: '../../assets/img/cod.jpg',
    videoUrl: '../../assets/video/cod.webm',
    price: '87.49€',
    discount: '20',
    dlc: false,
    reserved: true,
    rdays: '5',
    platform: 'xbox'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
