import { upcoming } from './../../models/upcoming.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  @Input() elem: upcoming = {
    date: '',
    name: '',
    imgUrl: '',
    discount: '',
    price: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
