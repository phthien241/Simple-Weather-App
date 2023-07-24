import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  city: any;
  constructor(private cityService: CityService){}
  ngOnInit(): void {
    this.cityService.emitData("Sydney");
  }
  OnSubmit( form : NgForm){
    this.city = form.value.city;
    var cityChars = [...this.city];
      for(let i = 0; i < cityChars.length; i++){
        if(cityChars[i]==' '){
          cityChars[i]='_';
        }
      }
      this.city = cityChars.join('');
    this.cityService.emitData(this.city);
    form.reset();
  }
  
}
