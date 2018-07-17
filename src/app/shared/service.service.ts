import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.url + '/tasks');
  }

  getMessages() {
    return this.http.get(this.url + '/messages');
  }

  getActivities() {
    return this.http.get(this.url + '/activities');
  }
}
