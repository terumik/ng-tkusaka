import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './about/about.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioDetailComponent } from './portfolios/portfolio-detail/portfolio-detail.component';
import { PortfolioListComponent } from './portfolios/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolios/portfolio-list/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfoliosComponent,
    ContactComponent,
    HomeComponent,
    PortfolioDetailComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
