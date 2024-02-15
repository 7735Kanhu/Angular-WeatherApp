import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
  providers: [WeatherService]
})
export class WeatherCardComponent implements OnInit{

  cityName = 'Odisha'
data = {
  temp:'',
  feelsLike:'',
  pressure:'',
  humidity:'',
  city:'',
  main:'',
  imgeURL:'',

}

  constructor(private readonly weatherService:WeatherService){}

  ngOnInit(): void {
      this.loadData()
  }
  loadData(){
    if (this.cityName) {
      this.weatherService.fetchData(this.cityName).subscribe({
        next:(data: any)=>{
          this.data.temp = this.convertKelvinToCelsius(data.main.temp);
          this.data.feelsLike = this.convertKelvinToCelsius(data.main.feels_like);
          this.data.pressure = data.main.pressure;
          this.data.humidity = data.main.humidity;
          this.data.city = data.name;
          this.data.imgeURL = data.weather[0].icon;
          this.data.main = data.weather[0].main;
          
        },
        error:(err)=>{
          console.log('Error while featching Data',err);
          
        }
      })
    }
  }
  convertKelvinToCelsius(kelvin: number): string {
    return (kelvin - 273.15).toFixed(2);
  }
}
