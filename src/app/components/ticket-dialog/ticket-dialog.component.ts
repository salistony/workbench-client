import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Ticket } from 'src/app/core/_models/salisworkbench/ticket';
import { SalisWorkbenchService } from 'src/app/core/_services/data/salisworkbench.service';
import { NotesDialogComponent } from '../notes-dialog/notes-dialog.component';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {

  ticket: Ticket = {} as Ticket;
  isLoading = true;
  note: boolean = false

  constructor(private config: DynamicDialogConfig, private dialogService: DialogService,
              private salisWorkbenchService: SalisWorkbenchService) { }

  ngOnInit(): void {
    this.assignTechnicianId();
  }

  private assignTechnicianId(){
    const id = this.config.data.id;

    this.salisWorkbenchService.getTicketInfo(id).subscribe( response => {
      this.ticket = response
      this.isLoading = false;
    })
  }

  showNotesDialog(notes: string){
    this.dialogService.open(NotesDialogComponent, {
      data: {notes},
			width: '400px',
			styleClass: 'dynamic-dialog',
			header: 'Notițe',
      dismissableMask: true
    })
  }

}
