import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {

  notes: string = '';

  constructor(private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.notes = this.config.data.notes;
  }
}
