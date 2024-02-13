import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChiamateAPIService {

  constructor(public httpClient:HttpClient) { }
   apiKey='api_key=3bbdef2bd5b89192e8dc5daf7ec7702d';
   language='language=it-IT';
  //  includeVideo='include_video=true';


  getFilm(): Observable<any> {
    // return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/11?api_key=3bbdef2bd5b89192e8dc5daf7ec7702d`);
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/discover/movie?`+ this.apiKey + '&' + this.language);
  }

  searchFilm(query:string):Observable<any>{
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/search/movie?query=`+ query +'&'+this.apiKey + '&' + this.language)
  }

}
