import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { GalleryComponent } from './gallery/gallery.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'galeria', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
