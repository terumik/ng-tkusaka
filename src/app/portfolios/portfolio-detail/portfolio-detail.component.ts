import { Component, OnInit, OnDestroy } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';
import { ActivatedRoute } from '@angular/router';
import { Animations } from 'src/app/shared/animation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  animations: [Animations.fadeIn]
})
export class PortfolioDetailComponent implements OnInit, OnDestroy {

  portfolioSub: Subscription;
  portfolio: Portfolio;

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.portfolioSub = this.route.data.subscribe(
      (data) => {
        this.portfolio = data.portfolioItem;
      });
    }

  ngOnDestroy(): void {
    this.portfolioSub.unsubscribe();
  }

}
