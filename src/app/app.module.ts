import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ScheduleModule, DialogModule, CalendarModule, ToggleButtonModule, DragDropModule, ButtonModule, InputTextareaModule, CheckboxModule, InputTextModule, SelectButtonModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api
import 'fullcalendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScheduleModule, DialogModule, CalendarModule, ToggleButtonModule, DragDropModule, ButtonModule, InputTextareaModule, CheckboxModule, InputTextModule, SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
