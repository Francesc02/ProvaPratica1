
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ChiamateAPIService } from '../services/chiamate-api.service';
import { Location } from '@angular/common';
import {Component} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  
  constructor(public router:Router){}

  queryCerca:string;

  public items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: 'home'
        },
        {
            label: 'Film',
            items: [
              { label: 'Azione' },
              { label: 'Thriller' },
              { label: 'Romantico' },
              { label: 'Avventura' },
              { label: 'Horror' },
              { label: 'Fantascienza'}
            ]
        }];
    }




  
  searchFilm() {
      this.router.navigate(['home/' + this.queryCerca]);
    } 
    reload() {
    this.router.navigate(['home']);
  }
}
