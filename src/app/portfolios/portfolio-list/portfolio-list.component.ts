import { Component, OnInit, OnDestroy } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, OnDestroy {

  portfolioSub: Subscription;
  portfolios: Portfolio[];
  spacer = [];

  constructor(
    private portfolioService: PortfolioService,
  ) { }


  ngOnInit(): void {
    this.portfolioSub = this.portfolioService.getPortfolios().subscribe(
      (data) => {
        this.portfolios = data;
        const totalPortfolios = data.length;
        if (totalPortfolios % 3 !== 0 && totalPortfolios > 3) {
          for (let index = 0; index < 3 - totalPortfolios % 3; index++) {
            this.spacer.push('');
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.portfolioSub.unsubscribe();
  }

}
