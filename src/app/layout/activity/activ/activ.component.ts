import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activ',
  templateUrl: './activ.component.html',
  styleUrls: ['./activ.component.css']
})
export class ActivComponent implements OnInit {
@Input() activity;
@Input() index;
@Input() length;
avatar: string;
  constructor() { }

  ngOnInit() {
    this.avatar = this.activity.photo;
  }

}
