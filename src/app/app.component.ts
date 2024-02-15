import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherCardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
}
