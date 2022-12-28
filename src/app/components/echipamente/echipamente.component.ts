import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Echipament } from 'src/app/core/_models/salisworkbench/echipament';
import { EchipamenteService } from 'src/app/core/_services/data/echipamente.service';
import { AddEchipamentDialogComponent } from '../add-echipament-dialog/add-echipament-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-echipamente',
  templateUrl: './echipamente.component.html',
  styleUrls: ['./echipamente.component.scss'],
  providers: [DialogService]
})
export class EchipamenteComponent implements OnInit {
  isLoading: boolean = false;
  echipamente: Echipament[] = [];

  constructor(private echipamenteService: EchipamenteService,
    private messageService: MessageService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getEchipamente();
  }

  getEchipamente(){
    this.isLoading = true;
    this.echipamenteService.getEchipamente().subscribe( response => {
      this.echipamente = response
      this.isLoading = false;
    })
  }

  addNewEchipament() {
    this.dialogService.open(AddEchipamentDialogComponent, {
      width: '800px',
			styleClass: 'dynamic-dialog',
			header: 'Adaugă Echipament Nou',
      dismissableMask: true
    }).onClose.subscribe(response => {
      if(response){
        this.ngOnInit();
        this.messageService.add({severity:'success', summary: 'Success', detail:'Echiapmentul a fost adăugat'});
      }
    })
  }

  onRowEditSave(echipament: Echipament) {
    this.echipamenteService.editEchipament(echipament).subscribe( response => {
      if(response.content){this.messageService.add({severity:'success', summary: 'Success', detail:'Schimbarea a fost salvată'});}
      else this.messageService.add({severity:'error', summary: 'Error', detail:'Schimbarea nu a fost salvată'});})
  }

  deleteEchipament(id: number){
		const message = 'Sigur doriți să ștergeți echipamentul?';
    this.openConfirmationDialog(message).onClose.subscribe(response => {
			if (response) {
				this.echipamenteService.deleteEchipament(id).subscribe(
					() => {
            const index = this.echipamente.findIndex(g => g.id === id);
						this.echipamente.splice(index, 1);
						this.messageService.add({severity:'success', summary: 'Success', detail:'Schimbarea a fost salvată'});
					}, error => {
						this.messageService.add({severity:'error', summary: 'Error', detail:'Schimbarea nu a fost salvată'});
					}
				);
			}
		});
  }

  openConfirmationDialog(message: string): DynamicDialogRef {
		return this.dialogService.open(ConfirmDialogComponent, {
			styleClass: 'confirm-dialog',
			header: 'Delete Confirmation',
			dismissableMask: true,
			data: { message }
		});
	}

}
