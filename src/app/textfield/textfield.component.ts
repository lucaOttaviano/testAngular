import { Component, OnInit } from '@angular/core';
import { NoteListService } from '../services/note-list.service'; // import del servizio

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  input: string = "";
  
  constructor(private noteListService: NoteListService) { } // injection del servizio

  print(){
    if (this.input == ""){
      alert("Input vuoto")
    }
    else{
      this.noteListService.addInput(this.input); // richiama la funzione addInput del service e gli passa la variabile this.input come parametro
      this.input = "";
    }
  }

  ngOnInit(): void {
  }

}
