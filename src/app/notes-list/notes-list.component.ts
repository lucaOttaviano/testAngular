import { Component, OnInit } from '@angular/core';
import { NoteListService } from '../services/note-list.service'; // import del servizio
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {
 
  array: string[] = this.noteListService.array; // inizializza l'array = a quello del servizio per poterlo usare in questa classe

  constructor(private noteListService: NoteListService) { } // injection del servizio

  ngOnInit(): void {
  }

}
