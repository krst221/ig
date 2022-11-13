import { titlebar } from './../../models/titlebar.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input() text: titlebar = {
    h2: '',
    btn: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
