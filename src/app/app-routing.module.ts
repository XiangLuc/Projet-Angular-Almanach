import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilSiteComponent } from './accueil-site/accueil-site.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'accueil', component : AccueilSiteComponent  },
  { path : '', redirectTo : 'accueil', pathMatch : 'full' }, 
  { path : '**', component : PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }