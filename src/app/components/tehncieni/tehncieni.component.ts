import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Tehnicieni } from 'src/app/core/_models/salisworkbench/tehnicieni';
import { TehnicieniService } from 'src/app/core/_services/data/tehnicieni.service';
import { AddTehnicianDialogComponent } from '../add-tehnician-dialog/add-tehnician-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tehncieni',
  templateUrl: './tehncieni.component.html',
  styleUrls: ['./tehncieni.component.scss'],
  providers: [DialogService]
})
export class TehncieniComponent implements OnInit {

  isLoading: boolean = false;
  tehnicieni: Tehnicieni[] = [];

  constructor(private tehnicieniService: TehnicieniService,
    private messageService: MessageService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getTehnicieni();
  }

  getTehnicieni(){
    this.isLoading = true;
    this.tehnicieniService.getTehnicieni().subscribe( response => {
      this.tehnicieni = response
      this.isLoading = false;
    })
  }

  addNewTehnician() {
    this.dialogService.open(AddTehnicianDialogComponent, {
      width: '400px',
			styleClass: 'dynamic-dialog',
			header: 'Adaugă Tehnician Nou',
      dismissableMask: true
    }).onClose.subscribe(response => {
      if(response){
        this.ngOnInit();
        this.messageService.add({severity:'success', summary: 'Success', detail:'Tehnicianul a fost adăugat'});
      }
    })
  }

  onRowEditSave(tehnician: Tehnicieni) {
    this.tehnicieniService.editTehnician(tehnician).subscribe( response => {
      if(response.content){this.messageService.add({severity:'success', summary: 'Success', detail:'Schimbarea a fost salvată'});}
      else this.messageService.add({severity:'error', summary: 'Error', detail:'Schimbarea nu a fost salvată'});})
  }

  deleteTehnician(id: number){
		const message = 'Sigur doriți să ștergeți tehnicianul?';
    this.openConfirmationDialog(message).onClose.subscribe(response => {
			if (response) {
				this.tehnicieniService.deleteTehnician(id).subscribe(
					() => {
            const index = this.tehnicieni.findIndex(g => g.id === id);
						this.tehnicieni.splice(index, 1);
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
