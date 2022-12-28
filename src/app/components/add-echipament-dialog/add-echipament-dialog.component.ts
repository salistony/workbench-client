import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Echipament } from 'src/app/core/_models/salisworkbench/echipament';
import { EchipamenteService } from 'src/app/core/_services/data/echipamente.service';

@Component({
  selector: 'app-add-echipament-dialog',
  templateUrl: './add-echipament-dialog.component.html',
  styleUrls: ['./add-echipament-dialog.component.scss']
})
export class AddEchipamentDialogComponent implements OnInit {

  echipament: Echipament = {} as Echipament;

  constructor(private echipamenteService: EchipamenteService,
    private ref: DynamicDialogRef,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  saveNewEchipament() {
    this.echipamenteService.addEchipament(this.echipament).subscribe(response => {
      if(!response.success){
        this.messageService.add({severity:'error', summary: 'Error', detail:'Nu toate câmpurile sunt completate'});
      }

      if(response.success) {
        this.ref.close(response.content);
      }
    })
  }
}
