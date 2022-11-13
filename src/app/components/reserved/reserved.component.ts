import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss']
})
export class ReservedComponent implements OnInit {

  @Input () days: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
