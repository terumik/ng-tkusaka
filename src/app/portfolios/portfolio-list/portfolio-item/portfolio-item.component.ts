import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onDetails(id) {
    console.log(id);
    this.router.navigate([id], {relativeTo: this.route});
  }

}
