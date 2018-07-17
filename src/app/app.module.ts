import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TasksComponent } from './layout/tasks/tasks.component';
import { MessagesComponent } from './layout/messages/messages.component';
import { ActivityComponent } from './layout/activity/activity.component';
import { DiagramComponent } from './layout/diagram/diagram.component';
import { GrafficComponent } from './layout/graffic/graffic.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './layout/tasks/task/task.component';
import { MessageComponent } from './layout/messages/message/message.component';
import { ActivComponent } from './layout/activity/activ/activ.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SideBarComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent,
    DiagramComponent,
    GrafficComponent,
    TaskComponent,
    MessageComponent,
    ActivComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
