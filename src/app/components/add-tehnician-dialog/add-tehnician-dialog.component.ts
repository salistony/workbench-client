import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Tehnicieni } from 'src/app/core/_models/salisworkbench/tehnicieni';
import { TehnicieniService } from 'src/app/core/_services/data/tehnicieni.service';

@Component({
  selector: 'app-add-tehnician-dialog',
  templateUrl: './add-tehnician-dialog.component.html',
  styleUrls: ['./add-tehnician-dialog.component.scss']
})
export class AddTehnicianDialogComponent implements OnInit {

  tehnician: Tehnicieni = {} as Tehnicieni;

  constructor(private tehnicianeService: TehnicieniService,
    private ref: DynamicDialogRef,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  saveNewtehnician() {
    this.tehnicianeService.addTehnician(this.tehnician).subscribe(response => {
      if(!response.success){
        this.messageService.add({severity:'error', summary: 'Error', detail:'Nu toate câmpurile sunt completate'});
      }

      if(response.success) {
        this.ref.close(response.content);
      }
    })
  }
}
