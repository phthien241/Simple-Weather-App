import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: "news", component: NewsComponent},
  {path: "news/:page", component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
