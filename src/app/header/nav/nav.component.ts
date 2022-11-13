import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  list: string[] = ["PC", "Playstation", "Xbox", "Nintendo"];

  constructor() { }

  ngOnInit(): void {
  }

}
