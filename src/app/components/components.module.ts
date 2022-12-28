import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeModule } from '../core/_packages/primeng/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { NotesDialogComponent } from './notes-dialog/notes-dialog.component';
import { SettingsComponent } from './settings/settings.component';
import { AddEchipamentDialogComponent } from './add-echipament-dialog/add-echipament-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EchipamenteComponent } from './echipamente/echipamente.component';
import { TehncieniComponent } from './tehncieni/tehncieni.component';
import { AddTehnicianDialogComponent } from './add-tehnician-dialog/add-tehnician-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    NotFoundComponent,
    DashboardComponent,
    SpinnerComponent,
    TicketDialogComponent,
    NotesDialogComponent,
    SettingsComponent,
    AddEchipamentDialogComponent,
    ConfirmDialogComponent,
    EchipamenteComponent,
    TehncieniComponent,
    AddTehnicianDialogComponent,
    NavigationComponent,
    AccountSettingsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    PrimeModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    SpinnerComponent
  ],
})
export class ComponentsModule { }
