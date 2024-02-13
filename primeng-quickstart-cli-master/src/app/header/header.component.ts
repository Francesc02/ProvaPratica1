import { style } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[]; 
  queryCerca:string;



  constructor(private router: Router){}

  ngOnInit() {
    
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
                  {label: 'Azione'},
                  {label: 'Thriller'},
                  {label: 'Romantico'},
                  {label: 'Avventura'},
                  {label: 'Horror'},
                  {label: 'Fantascienza'}
              ]
          },
      ];
  }

  showValore(){
  }
}
