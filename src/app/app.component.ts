    import { Component, OnInit } from '@angular/core';
    import { CommonService } from './common.service'
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {
      constructor(private a: CommonService) { }
      ngOnInit(): void {

      }
      title = 'todos-list';
    }
    export interface Todo {
      id: Number;
      title: String;
      desc: String;
      edate: Date;
      status: String;
    }
