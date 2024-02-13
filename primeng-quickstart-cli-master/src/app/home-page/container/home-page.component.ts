import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChiamateAPIService } from 'src/app/services/chiamate-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(public chiamateApi:ChiamateAPIService){}

  getFilm(){
    this.chiamateApi.getFilm().subscribe(result=>{
      console.log(result);
    })
  }

}
