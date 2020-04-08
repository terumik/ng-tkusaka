import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';
import { PortfolioService } from '../services/portfolio.service';
import { Animations } from '../shared/animation';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
  animations: [Animations.fadeIn]
})
export class PortfoliosComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getPortfolios();
    console.log(this.portfolios);

  }

}
