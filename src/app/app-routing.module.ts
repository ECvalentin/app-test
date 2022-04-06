import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '*', component: HomepageComponent },
  { path: 'le-musee', component: HomepageComponent },
  { path: 'infos-pratiques', component: InfoPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
