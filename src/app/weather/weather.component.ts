import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  day = "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?w=900&t=st=1689916157~exp=1689916757~hmac=12f30d56ed62f8d26d495958e2cd8ae9c1d235b63ccb42b40d66346f75a3ea80";
  night = "https://wallpapers.com/images/hd/starry-night-sky-over-a-river-92a8ngoxc7yvj8tb.webp";
  background = this.day;
  date = new Date();
  weatherData: any;
  city = "Sydney";
  constructor( private http: HttpClient, private cityServicec: CityService){
    http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=b18b71ac9eb8321aa0dd3b9197e0f3e5`).
    pipe(map(x=>x as any[])).pipe(mergeMap(x=>http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${x[0].lat}&lon=${x[0].lon}&appid=b18b71ac9eb8321aa0dd3b9197e0f3e5`))).subscribe(value=>{
      this.weatherData = value;
      console.log(value);
    })
  }
  ngOnInit(): void {
    this.cityServicec.sentData.subscribe((city : string)=>{
      this.city = city;
      var cityChars = [...city];
      for(let i = 0; i < cityChars.length; i++){
        if(cityChars[i]=='_'){
          cityChars[i]=' ';
        }
      }
      this.city = cityChars.join('');
      this.getWeather(this.http, city)
    })
  }
  getWeather(http:HttpClient, city: string){
    http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b18b71ac9eb8321aa0dd3b9197e0f3e5`).
    pipe(map(x=>x as any[])).pipe(mergeMap(x=>http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${x[0].lat}&lon=${x[0].lon}&appid=b18b71ac9eb8321aa0dd3b9197e0f3e5`))).subscribe(value=>{
      this.weatherData = value;
      console.log(this.weatherData.weather);
      var d = new Date(this.weatherData.dt*1000);
      var time = this.getTime(d.getHours(), d.getTimezoneOffset()/-60, this.weatherData.timezone/3600);
      if(time>=6 && time <=18){
        this.background = this.day;
      }else{
        this.background = this.night;
      }
    })
  }

  getTime(localTime:  number,localGMT : number, countryGMT: number){
    var time = localTime - (localGMT - countryGMT);
    if(time < 0){
      time += 24;
    }else if(time >=24){
      time -= 24;
    }
    return time;
  }
}
