import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from "primeng/toast";
import { TabViewModule } from 'primeng/tabview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';



const exports = [
  PanelMenuModule,
  TieredMenuModule,
  ButtonModule,
  CheckboxModule,
  InputTextareaModule,
  InputSwitchModule,
  CardModule,
  AutoCompleteModule,
  BrowserAnimationsModule,
  MultiSelectModule,
  DropdownModule,
  AutoCompleteModule,
  AccordionModule,
  TableModule,
  PaginatorModule,
  ProgressSpinnerModule,
  ToastModule,
  TabViewModule,
  DynamicDialogModule,
  CalendarModule,
  DialogModule,
  OverlayPanelModule,
  AvatarModule,
  AvatarGroupModule,
  MenubarModule,
  SidebarModule,
  InputTextModule,
  ConfirmPopupModule
];

@NgModule({
  imports: [
    CommonModule,
    // @ts-ignore spreadArrays
    ...exports
  ],
  exports
})
export class PrimeModule {}
