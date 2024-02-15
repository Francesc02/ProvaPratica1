
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ChiamateAPIService } from '../services/chiamate-api.service';
import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  
  
  items: MenuItem[] = [
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
  queryCerca: string = '';

  router: Router = inject(Router);
  chiamateApi: ChiamateAPIService = inject(ChiamateAPIService);
  location: Location = inject(Location);
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  searchFilm() {
    if (this.queryCerca !== undefined){
      this.router.navigate(['home/' + this.queryCerca]);
    } else {
      return;
    }
  }
  reload() {
    this.router.navigate(['home']);
  }
}