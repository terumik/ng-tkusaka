import { Component, OnInit } from '@angular/core';
import { Animations } from './shared/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.burgerToggleTop, Animations.burgerToggleCenter, Animations.burgerToggleBottom
  ],
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
