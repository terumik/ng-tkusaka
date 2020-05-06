import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  constructor(
    private http: HttpClient,
  ) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>('https://tkusaka.com/api/portfolioApi.php');
  }
  getPortfolioById(id: number) {
    return this.http.get<Portfolio>('https://tkusaka.com/api/portfolioApi.php?id=' + id);
  }

}
