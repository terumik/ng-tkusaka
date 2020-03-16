import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  isOpened = false;
  times = '<i class=\'fa fa-times\'></i>';
  bars = '<i class=\'fa fa-bars\'></i>';
  today: number;

  constructor() { }

  ngOnInit() {
    this.today = Date.now();
  }

}
