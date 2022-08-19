import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { LassociationPageComponent } from './components/lassociation-page/lassociation-page.component';
import { VoirAutourPageComponent } from './components/voir-autour-page/voir-autour-page.component';
import { MentionsLegalesPageComponent } from './components/mentions-legales-page/mentions-legales-page.component';
import { PlanSitePageComponent } from './components/plan-site-page/plan-site-page.component';
import { AProposPageComponent } from './components/a-propos-page/a-propos-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '*', component: HomepageComponent },
  { path: 'le-musee', component: HomepageComponent },
  { path: 'infos-pratiques', component: InfoPageComponent },
  { path: 'les-collections', component: CollectionsPageComponent },
  { path: 'association', component: LassociationPageComponent },
  { path: 'voir-autour', component: VoirAutourPageComponent },
  { path: 'mentions-legales', component: MentionsLegalesPageComponent },
  { path: 'a-propos', component: PlanSitePageComponent },
  { path: 'plan-du-site', component: AProposPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
