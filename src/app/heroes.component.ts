import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) {

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  OnInit() {
    console.log("HeroesComponent OnInit()")
  }

  ngOnInit() {
    console.log("HeroesComponent ngOnInit()")
    this.getHeroes();
  }

}