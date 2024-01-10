import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { Tp1DebutComponent } from 'src/app/tp1/tp1-debut/tp1-debut.component';
import { Tp2DebutComponent } from 'src/app/tp2/tp2-debut/tp2-debut.component';
import { Tp3DebutComponent } from 'src/app/tp3/tp3-debut/tp3-debut.component';
import { Tp4DebutComponent } from 'src/app/tp4/tp4-debut/tp4-debut.component';
import { Tp5DebutComponent } from 'src/app/tp5/tp5-debut/tp5-debut.component';

const routes: Routes = [
  { path: 'tp1', component: Tp1DebutComponent },
  { path: 'tp2', component: Tp2DebutComponent },
  { path: 'tp3', component: Tp3DebutComponent },
  { path: 'tp4', component: Tp4DebutComponent },
  { path: 'tp5', component: Tp5DebutComponent },
  { path: '', component: AccueilComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
