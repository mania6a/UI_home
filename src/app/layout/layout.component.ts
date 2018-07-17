import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('sideBar', [
      state('hide', style({
        position: 'relative',
        left: '-250px',
          width: '0px',
        flexGrow: 0
      })),
      transition('* <=> hide', animate('400ms'))
    ])
  ]
})
export class LayoutComponent implements OnInit {
isHidden = false;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 521) {
      this.isHidden = true;
    }
  }

  toggleBar() {
    this.isHidden = !this.isHidden;
    console.log('hello');
  }

}
