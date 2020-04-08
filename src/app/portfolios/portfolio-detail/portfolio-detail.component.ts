import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/models/portfolio.model';
import { ActivatedRoute } from '@angular/router';
import { Animations } from 'src/app/shared/animation';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  animations: [Animations.fadeIn]
})
export class PortfolioDetailComponent implements OnInit {

  portfolio: Portfolio;


  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const portfolioId = url[1].path;
      this.portfolio = this.portfolioService.getPortfolioById(+portfolioId);
    });

  }

}
