import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Evento 1',
      start: new Date(),
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      meta: {
        location: 'Oficina'
      }
    },
    {
      title: 'Evento 2',
      start: new Date(),
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      },
      meta: {
        location: 'Casa'
      }}];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombreMes(numeroMes: number): string {
    const nombresMeses = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
  
    return nombresMeses[numeroMes - 1];
  }

}
