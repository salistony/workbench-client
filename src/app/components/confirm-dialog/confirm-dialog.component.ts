import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  message: string = '';

  constructor(public config: DynamicDialogConfig,
              public ref: DynamicDialogRef) { }

  ngOnInit() {
    this.message = this.config.data.message;
  }

  onButtonSelect(value: boolean) {
    this.ref.close(value);
  }

}
