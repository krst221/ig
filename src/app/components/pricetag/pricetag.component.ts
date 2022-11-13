import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricetag',
  templateUrl: './pricetag.component.html',
  styleUrls: ['./pricetag.component.scss']
})
export class PricetagComponent implements OnInit {

  @Input() discount: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
