import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
