import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../shared/service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages = [];
messagesUnread = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMessages().subscribe((response: Array<any>) => {
      this.messages = response;
      this.messagesUnread = this.messages.filter(m => m.isRead === true);
    });
  }

}
