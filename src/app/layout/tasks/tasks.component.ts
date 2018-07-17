import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../shared/service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  tasksDelayed = [];
  constructor(private server: ServiceService) { }

  ngOnInit() {
    this.server.getTasks().subscribe((response: Array<any>) => {
      this.tasks = response;
      this.tasksDelayed = this.tasks.filter(t => t['isDelayed'] === true);
      }
    );
  }

}
