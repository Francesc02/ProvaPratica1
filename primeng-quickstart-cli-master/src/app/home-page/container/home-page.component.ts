import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChiamateAPIService } from 'src/app/services/chiamate-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  film:any;

  constructor(public chiamateApi:ChiamateAPIService){}


  getFilm(){
    this.chiamateApi.getFilm().subscribe(result=>{
      this.film=result;
      console.log(this.film);
      console.log(this.film.results[0].title);
      console.log(this.film.results[0].poster_path)
    })
  }
}
