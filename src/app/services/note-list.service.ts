import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoteListService {

  array: string[] = []; // inizializza l'array vuoto

  addInput(input: string){ 
    this.array.push(input); // aggiunge il parametro input passato dalla classe Textfieldcomponent all'array 
    console.log(this.array);
  }

  constructor() { }
}
