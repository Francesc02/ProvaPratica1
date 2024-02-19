import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChiamateAPIService } from 'src/app/services/chiamate-api.service';
import { PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  film: unknown | null = null;
  query:string | undefined;

  constructor(public chiamateApi:ChiamateAPIService,public route:ActivatedRoute,public router:Router){}



  ngOnInit(): void {
    this.query = JSON.stringify(this.route.snapshot.queryParams['query']);
    this.route.params.subscribe(params => {
      this.query = params['query'];
  }); 
  console.log(this.query);

  if(this.query){
    this.chiamateApi.searchFilm(this.query).subscribe(result=>{
      this.film=result;
    })
  }else{
    this.chiamateApi.getFilm().subscribe(result=>{
      if(result.total_results == 0){
        this.film="nome film non valido!"
      }
      this.film=result;
      console.log(this.film);
    })
  }  
}

goToDettaglio(id:number){
  this.router.navigate(['dettaglio/' + id]);
  console.log(id)

}
provaGoogleDrive(){
 this.chiamateApi.provaChiamataGoogleDrive().subscribe(response=>{
  console.log(response);
 }) 
}

}