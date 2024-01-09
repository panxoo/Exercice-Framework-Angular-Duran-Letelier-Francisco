import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Tp1DebutComponent } from './tp1/tp1-debut/tp1-debut.component';
import { Tp1ExerciceComponent } from './tp1/tp1-exercice/tp1-exercice.component';
import { Tp2DebutComponent } from './tp2/tp2-debut/tp2-debut.component';
import { Tp2RowComponent } from './tp2/tp2-row/tp2-row.component';
import { Tp3DebutComponent } from './tp3/tp3-debut/tp3-debut.component';
import { Tp3ButtonComponent } from './tp3/tp3-button/tp3-button.component';
import { Tp4DebutComponent } from './tp4/tp4-debut/tp4-debut.component';
import { Tp4CardComponent } from './tp4/tp4-card/tp4-card.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Tp1DebutComponent,
    Tp1ExerciceComponent,
    Tp2DebutComponent,
    Tp2RowComponent,
    Tp3DebutComponent,
    Tp3ButtonComponent,
    Tp4DebutComponent,
    Tp4CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
