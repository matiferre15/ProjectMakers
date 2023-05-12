import { Component, OnInit, HostBinding } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  weatherData: any;
  @HostBinding('class') classes = 'row';
  agenda: any = []

  constructor(private weatherService: WeatherService, private agendaService: AgendaService){}

  ngOnInit() {
    this.weatherService.getWeather('London').subscribe(data => {
      this.weatherData = data;
    });

    this.agendaService.getAgenda('1').subscribe(
      res=> {
        this.agenda = res;
      },
      err=> console.log(err)
      );
  }
  

}
