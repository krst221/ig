import { midblock } from './../../models/midblock.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-midblock',
  templateUrl: './midblock.component.html',
  styleUrls: ['./midblock.component.scss']
})
export class MidblockComponent implements OnInit {

  @Input() block: midblock = {
    imgUrl: '',
    h2: '',
    p: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
