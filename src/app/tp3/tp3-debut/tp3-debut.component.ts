import { Component } from '@angular/core';

@Component({
  selector: 'app-tp3-debut',
  templateUrl: './tp3-debut.component.html',
  styleUrls: ['./tp3-debut.component.scss']
})
export class Tp3DebutComponent {
  compteur: number = 0

  onReturnValeur(valeur: number) {
    this.compteur = valeur;
  }
}
