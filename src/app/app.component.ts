import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarComponent!: FullCalendarComponent; // Adiciona o ! para indicar que a propriedade será inicializada posteriormente

  constructor() {}
  
  ngAfterViewInit() {
    this.calendarComponent.getApi().setOption('height', 700);
  }
}

