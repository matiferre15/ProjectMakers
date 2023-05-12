import { Component, OnInit, HostBinding } from '@angular/core';

import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  agenda: any = [];

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.getAgenda('2').subscribe(
      res=> {
        this.agenda = res;
      },
      err=> console.log(err)
      );
    
  }

}
