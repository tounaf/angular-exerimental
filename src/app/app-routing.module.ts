import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Route} from './config/routes';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  /*
  {
    path: '',
    loadChildren: () => import('./produit/produit.module').then(mod => mod.ProduitModule),
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(mod => mod.SiteModule),
  },
  {
    path: '',
    loadChildren: () => import('./entite/entite.module').then(mod => mod.EntiteModule),
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
