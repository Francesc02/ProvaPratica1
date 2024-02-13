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
          },
          {
            icon:'pi pi-video',
              label: 'Film',
              items: [
                  {label: 'Delete'},
                  {label: 'Refresh'}
              ]
          },
      ];
  }

  showValore(){
    console.log(this.queryCerca);
    console.log(this.router.config);
    this.router.navigate(['/home']);
  }

}
