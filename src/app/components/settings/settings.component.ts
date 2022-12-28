import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Echipament } from 'src/app/core/_models/salisworkbench/echipament';
import { EchipamenteService } from 'src/app/core/_services/data/echipamente.service';
import { AddEchipamentDialogComponent } from '../add-echipament-dialog/add-echipament-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
