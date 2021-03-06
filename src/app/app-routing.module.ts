import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailComponent } from './portfolios/portfolio-detail/portfolio-detail.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioResolverService } from './services/portfolio.resolver';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfoliosComponent },
  {
    path: 'portfolio/:id',
    component: PortfolioDetailComponent,
    resolve: {
      portfolioItem: PortfolioResolverService
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
