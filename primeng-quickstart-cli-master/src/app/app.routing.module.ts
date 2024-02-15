import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/container/home-page.component';
import { AppComponent } from './app.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home/:query', component: HomePageComponent },
  { path: 'dettaglio/:id', component:DettaglioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
