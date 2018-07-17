import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output('toggleBar') toggleBar = new EventEmitter();
isBarClosed = false;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 521) {
      this.isBarClosed = true;
    }
  }

  toggleSidebar() {
    this.toggleBar.emit();
    this.isBarClosed = !this.isBarClosed;
  }

}
