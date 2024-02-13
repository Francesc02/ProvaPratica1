import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { ChiamateAPIService } from '../services/chiamate-api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  items: MenuItem[]; 
  queryCerca: string;



  constructor(private router: Router,public chiamateApi:ChiamateAPIService,public location:Location){}

  ngAfterViewInit() {
    
      this.items = [
          {
              icon: 'pi pi-home',
              label: 'Home',
              routerLink: '/home',
          },
          {
            icon:'pi pi-video',
              label: 'Film',
              items: [
                  { label: 'Azione' },
                  { label: 'Thriller' },
                  { label: 'Romantico' },
                  { label: 'Avventura' },
                  { label: 'Horror' },
                  { label: 'Fantascienza' }
              ]
          },
      ];
  }

  searchFilm(){
   this.router.navigate(["home/" + this.queryCerca]);
  }
  reload(){
    this.router.navigate(["home"]);
  }
}
