import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} 
    {{hero.id}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

}
