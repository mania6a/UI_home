import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../shared/service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
activities = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getActivities().subscribe((response: Array<any>) => {
      this.activities = response;
    });
  }

}
