import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

@Injectable({
  providedIn: 'root',
})
const credentials = require('./credentials.json');
export class ChiamateAPIService {
  constructor(public httpClient: HttpClient) {}
  apiKey = 'api_key=3bbdef2bd5b89192e8dc5daf7ec7702d';
  language = 'language=it-IT';
  //  includeVideo='include_video=true';
  
// Configura le credenziali


  getFilm(): Observable<any> {
    // return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/11?api_key=3bbdef2bd5b89192e8dc5daf7ec7702d`);
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/discover/movie?` +
        this.apiKey +
        '&' +
        this.language
    );
  }

  searchFilm(query: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/search/movie?query=` +
        query +
        '&' +
        this.apiKey +
        '&' +
        this.language
    );
  }

  dettaglioFilm(id:number):Observable<any>{
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/`+ id + '?' + this.apiKey + '&' + this.language);
  }

  provaChiamataGoogleDrive():Observable<any>{
    return this.httpClient.get<any>(`https://oauth2.googleapis.com/token?AIzaSyDzENXVZsU2KF9d_aAfxw-M8J1BMU1dDU8`)
    // this.http.get('https://www.googleapis.com/drive/v3/files', 
  }







// // Imposta le autorizzazioni
// const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// const oauth2Client = new google.auth.OAuth2(
//     this.credentials.client_id,
//     this.credentials.client_secret,
//     this.credentials.redirect_uris[0]
// );

// // Genera l'URL di autorizzazione
// const authUrl = this.oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: this.SCOPES,
// });

// console.log("Autenticare questa app visitando: authUrl")

// // Dopo l'autenticazione, verrà reindirizzato a un URI con un codice di autorizzazione
// // Utilizza il codice di autorizzazione per ottenere un token di accesso
// const code = 'INSERT_AUTHORIZATION_CODE_HERE'; // Inserisci il codice di autorizzazione qui

// oauth2Client.getToken(code, (err, token) => {
//     if (err) {
//         return console.error('Errore durante l'ottenimento del token:', err);
//     }
//     OAuth2Client.setCredentials(token);
//     console.log('Token di accesso:', token);
//     // Ora puoi fare le chiamate API di Google Drive utilizzando oauth2Client
// });
}
