import { Component, OnInit } from '@angular/core';
import { Animations } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.fadeIn]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
