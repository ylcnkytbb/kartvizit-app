import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',  //'home' yazınca neden sayfada görünmüyor
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) } //cards roote'una gidince cardsmodulü yükleyecek

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
