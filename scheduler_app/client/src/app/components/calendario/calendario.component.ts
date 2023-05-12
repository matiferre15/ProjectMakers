import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Reunion } from 'src/app/models/Reunion';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  reuniones: Reunion[] = [];
  

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  

  events: CalendarEvent[] = [];

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.getAgenda('1').subscribe((res: any) => {
    console.log(res);
    this.reuniones = res;
    console.log(this.reuniones)
    this.events = this.getEvents();
    console.log(this.events)
  });
    
    //console.log(this.events);
    
  }


  getEvents(): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    console.log('Reuniones:', this.reuniones); // agregar log para verificar reuniones
    this.reuniones.forEach(reunion => {
      console.log('Reunion:', reunion); // agregar log para verificar reunion
      const evento: CalendarEvent = {
        title: reunion.nombre,
        start: new Date(reunion.fecha),
        meta: {
          reunion: reunion
        }
      };
      events.push(evento);
    });
    console.log('Events:', events); // agregar log para verificar events
    return events;
  }
  

  convertirAEventos(reuniones: Reunion[]): CalendarEvent[] {
    return reuniones.map((reunion: Reunion) => {
      return {
        start: new Date(reunion.fecha),
        title: reunion.nombre,
        color: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        }
      };
    });
  };  
  
  obtenerNombreMes(numeroMes: number): string {
    const nombresMeses = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
  
    return nombresMeses[numeroMes - 1];
  }

  

}
