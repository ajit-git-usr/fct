import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { GrowlModule } from 'primeng/growl';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    CalendarModule
  ],
  exports: [CommonModule, TableModule, DropdownModule, MultiSelectModule, InputTextModule, GrowlModule, MessagesModule,
    MessageModule, CalendarModule]
})
export class PDatatableModule { }
