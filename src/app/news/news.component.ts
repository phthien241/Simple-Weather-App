import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  link = ["https://www.news.com.au/finance/money/costs/nsw-energy-minister-penny-sharpe-says-government-watching-el-nino-alert-very-carefully/news-story/21a2a254a91502b1695f3d85cd5e3482",
    "https://www.news.com.au/news/northern-territory/watch-and-act-issued-for-doxas-road-humpty-doo-bushfire/news-story/6aec6c05f45e8c7d5a1d46180597cd6a",
    "https://www.news.com.au/technology/environment/hailstorms-and-heatwaves-wild-hail-river-rips-through-city/news-story/e8d75a4a8669ae7b8271715c2a358d01",
    "https://www.news.com.au/technology/environment/nsw-town-shivers-through-years-coldest-temp/news-story/3a97624215b960b49913075dc7baf524",
    "https://www.news.com.au/national/south-australia/grab-your-scarf-and-gloves-its-a-frosty-morning-across-the-state-with-temperatures-below-zero/news-story/f11fec0c8371f05c49b690bb4f2e503b",
    "https://www.news.com.au/national/south-australia/sa-weather-adelaides-coldest-morning-in-more-than-a-year/news-story/705a235801c020c4c688935a83e97c57",
    "https://www.news.com.au/technology/environment/weather-update-cold-front-to-sweep-across-australia-bring-rain-and-cold-winds/news-story/ddf1bd86309c140fddeef6dff8637e2b",
    "https://www.news.com.au/technology/environment/weather-system-to-bring-rain-and-blizzards-to-three-states/news-story/0b8c67249b3f65754b3f9d04dbd07219",
    "https://www.news.com.au/technology/environment/australia-weekend-weather-forecasters-warn-of-dangerous-winds-snow-blizzards/news-story/a85179c24af00f3b23abb599753d9776",
    "https://www.news.com.au/technology/environment/severe-weather-warning-for-southern-australia-as-north-soaked/news-story/38cf3b4ca6acac00aca2c5712f3333a7",
    "https://www.news.com.au/national/south-australia/sa-damaging-wind-warning-gusts-up-to-100kmh-rain-and-storms-to-hit/news-story/f15ec9a52fb681700ab139cc9370399a",
    "https://www.news.com.au/technology/environment/warning-as-damaging-winds-of-up-to-100kmh-to-smash-southeastern-states/news-story/c9065f9e6ba3368834e7feb72c739d4c",
    "https://www.news.com.au/national/south-australia/sa-and-adelaide-weather-forecast-rain-and-strong-winds-set-to-hit-the-state/news-story/57debb69398d114ea950ce044fee197b"];
  title = ["NSW Energy Minister Penny Sharpe says government watching El Nino alert “very carefully”", "Watch and Act issued for Doxas Road Humpty Doo bushfire",
    "Hailstorms and heatwaves: Wild hail river rips through city",
    "NSW town shivers through year’s coldest temp",
    "Grab your scarf and gloves: It’s a frosty morning across the state with temperatures below zero",
    "SA weather: Adelaide’s coldest morning in more than a year",
    "Weather update: Cold front to sweep across Australia, bring rain and cold winds",
    "Weather system to bring rain and blizzards to three states",
    "Australia weekend weather: Forecasters warn of ‘dangerous’ winds, snow blizzards",
    "Severe weather warning for southern Australia as north soaked",
    "SA damaging wind warning: Gusts up to 100km/h, rain and storms to hit",
    "Warning as damaging winds of up to 100km/h to smash southeastern states",
    "SA and Adelaide weather forecast: Rain and strong winds set to hit the state"];
  img = ["https://content.api.news/v3/images/bin/9d06e19af5a47ce119a825b20fb3022f", "https://content.api.news/v3/images/bin/983d76dc7dc9438283c2862182d924c4?width=1024",
    "https://content.api.news/v3/images/bin/5e0cc82c51b569bbc4bcd4f102e6bee4",
    "https://content.api.news/v3/images/bin/4f45fd574939ce42cebce1b7c49d6baf?width=1024",
    "https://content.api.news/v3/images/bin/3dfa518200aa70c4c434991d832b30d3",
    "https://content.api.news/v3/images/bin/2126a23f4b5b856a12fd7406f9c159ab",
    "https://content.api.news/v3/images/bin/d7ff64c7148b66e16ae2265afa9ce523",
    "https://content.api.news/v3/images/bin/b72cdc89a1959b73ec95eb5e55886554",
    "https://content.api.news/v3/images/bin/395a1d61abc67f72898f73fd33aa84e6",
    "https://content.api.news/v3/images/bin/2112b5c07f0ea64a4dc5fb3658a35e3f",
    "https://content.api.news/v3/images/bin/166dca3efa91423155b7a3445380425b",
    "https://content.api.news/v3/images/bin/20a45d30f6694d3e23650cf13055f8d9",
    "https://content.api.news/v3/images/bin/8c00d04a7696055bd119a598df10c3ea"];
  totalPages = Math.ceil(this.link.length / 2);
  arrayPages = Array(this.totalPages).fill(1).map((x, i) => i + 1);
  currentPage = 1;
  index = this.link.length - 1 - (this.currentPage - 1) * 2;
  lastPage = this.arrayPages[this.arrayPages.length - 1];
  constructor(private route: ActivatedRoute) {
    this.currentPage = +route.snapshot.params['page'];
    console.log(this.link.length);
  }
  onMove(page: number) {
    this.currentPage = page;
    this.index = this.link.length - 1 - (this.currentPage - 1) * 2;
    console.log(this.arrayPages.length);
  }
  onPrevious() {
    this.currentPage--;
    this.index = this.link.length - 1 - (this.currentPage - 1) * 2;
  }
}
