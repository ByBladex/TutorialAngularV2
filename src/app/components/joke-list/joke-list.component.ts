import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/class/joke';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[] = [];
  constructor(private servicioJokes: ServiceService) {

   }

  borrarJoke(joke){
    this.servicioJokes.borrarJoke(joke);
  }

  ngOnInit(): void {
    this.jokes = this.servicioJokes.getJokes();
  }

  hide(joke){
    this.jokes[joke].hide = joke.toggle();
  }
}
