import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit() {
    console.log("AppComponent ngOnInit()")
  }

  name: string;
  
  message: string;
  
  onClick() {
  
    this.message = "Hello , " + this.name;
  
  }
}