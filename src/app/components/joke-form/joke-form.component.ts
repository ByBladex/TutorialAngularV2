import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/class/joke';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  constructor(private servicioJokes: ServiceService) { }


  createJoke(setup: string, punchline: string){
    this.servicioJokes.createJoke(setup, punchline);
  }

  ngOnInit(): void {
  }

}
