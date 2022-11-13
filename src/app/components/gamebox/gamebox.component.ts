import { gamebox } from './../../models/gamebox.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamebox',
  templateUrl: './gamebox.component.html',
  styleUrls: ['./gamebox.component.scss']
})

export class GameboxComponent implements OnInit {

  image: boolean = true;

  @Input() box: gamebox = {
    name: '',
    imgUrl: '',
    videoUrl: '',
    price: '',
    discount: '',
    dlc: false,
    reserved: false,
    rdays: '',
    platform: ''
  }

  playvideo() {
    this.image = false;
  }

  stopvideo() {
    this.image = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
