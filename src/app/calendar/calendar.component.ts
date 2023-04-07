import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay, addHours, addMonths, subMonths } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('Event clicked:', event);
  } 

  prev(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  next(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  ngOnInit(): void {
    this.events = [
      {
        title: 'Evento 1',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: { primary: '#e3bc08', secondary: '#FDF1BA' },
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
      {
        title: 'Evento 2',
        start: startOfDay(addHours(new Date(), 2)),
        end: endOfDay(addHours(new Date(), 4)),
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }
}
