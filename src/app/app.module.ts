import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
