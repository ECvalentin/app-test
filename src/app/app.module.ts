import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { LassociationPageComponent } from './components/lassociation-page/lassociation-page.component';
import { VoirAutourPageComponent } from './components/voir-autour-page/voir-autour-page.component';
import { MentionsLegalesPageComponent } from './components/mentions-legales-page/mentions-legales-page.component';
import { PlanSitePageComponent } from './components/plan-site-page/plan-site-page.component';
import { AProposPageComponent } from './components/a-propos-page/a-propos-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    InfoPageComponent,
    FooterComponent,
    CollectionsPageComponent,
    LassociationPageComponent,
    VoirAutourPageComponent,
    MentionsLegalesPageComponent,
    PlanSitePageComponent,
    AProposPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
