import { midblock } from './../../models/midblock.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midbar',
  templateUrl: './midbar.component.html',
  styleUrls: ['./midbar.component.scss']
})
export class MidbarComponent implements OnInit {

  b1: midblock = {
    imgUrl: '../../../assets/img/icon-download.svg',
    h2: 'Súper Rápido',
    p: 'Descarga digital instantánea'
  }

  b2: midblock = {
    imgUrl: '../../../assets/img/icon-secure.svg',
    h2: 'Fiable y seguro',
    p: 'Más de 10,000 juegos'
  }

  b3: midblock = {
    imgUrl: '../../../assets/img/customer.svg',
    h2: 'Atención al cliente',
    p: 'Agente disponible 24/7'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
