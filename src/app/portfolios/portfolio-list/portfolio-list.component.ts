import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  @Input() portfolios: Portfolio[];
  spacer = [];

  constructor() { }

  ngOnInit(): void {
    const numOfPortfolios = this.portfolios.length;

    // adjust layout
    if (numOfPortfolios % 3 !== 0 && numOfPortfolios > 3) {
      for (let index = 0; index < 3 - numOfPortfolios % 3; index++) {
        this.spacer.push('');
      }
    }

  }

}
