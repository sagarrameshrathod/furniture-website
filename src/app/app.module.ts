import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { FooterComponent } from './footer/footer.component';
import { SofaComponent } from './sofa/sofa.component';
import { IdeasComponent } from './ideas/ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    ProductSectionComponent,
    FooterComponent,
    SofaComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
