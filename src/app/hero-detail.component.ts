import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) {

  }

  ngOnInit() {
    console.log("HeroDetailComponent ngOnInit()")
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}