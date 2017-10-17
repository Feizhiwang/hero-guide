import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      console.log(heroes);
      this.heroes = heroes}
    );
  }

  OnInit() {
    console.log("AppComponent OnInit()")
  }

  ngOnInit() {
    console.log("AppComponent ngOnInit()")
    this.getHeroes();
  }
}
