import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PortfolioService } from './portfolio.service';


@Injectable({
  providedIn: 'root'
})
export class PortfolioResolverService {

  constructor(
    private portfolioService: PortfolioService
  ) { }


  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const portfolioId = route.paramMap.get('id');
    return this.portfolioService.getPortfolioById(+portfolioId);
  }

}
