import { Injectable } from '@angular/core';
import { Joke } from '../class/joke';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’")    
    ];
   }
  
  getJokes(){
    return this.jokes;
  }

  createJoke(setup: string, punchline: string){
    this.jokes.push(new Joke(setup,punchline));
  }

  borrarJoke(joke){
    let i = this.jokes.indexOf(joke);
    this.jokes.splice(i,1);
  }
}
