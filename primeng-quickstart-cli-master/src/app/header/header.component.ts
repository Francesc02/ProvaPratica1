import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ChiamateAPIService } from '../services/chiamate-api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  items: MenuItem[];
  queryCerca: string = '';

  router: Router = inject(Router);
  chiamateApi: ChiamateAPIService = inject(ChiamateAPIService);
  location: Location = inject(Location);

  ngAfterViewInit() {
    if(!!this.items){
      this.items=null;
    }
    this.items = [
      {
        icon: 'pi pi-home',
        label: 'Home',
        routerLink: '/home',
      },
      {
        icon: 'pi pi-video',
        label: 'Film',
        items: [
          { label: 'Azione' },
          { label: 'Thriller' },
          { label: 'Romantico' },
          { label: 'Avventura' },
          { label: 'Horror' },
          { label: 'Fantascienza' },
        ],
      },
    ];
  }

  searchFilm() {
    if(!!this.queryCerca){
      this.router.navigate(['home/' + this.queryCerca]);
      console.log("sono dentro l'if");
    }
    console.log("sono fuori l'if");
    console.log(this.queryCerca)
  }
  reload() {
    this.router.navigate(['home']);
  }
}
