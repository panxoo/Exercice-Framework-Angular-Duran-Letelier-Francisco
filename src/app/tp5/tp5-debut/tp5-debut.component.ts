import { Component } from '@angular/core';

@Component({
  selector: 'app-tp5-debut',
  templateUrl: './tp5-debut.component.html',
  styleUrls: ['./tp5-debut.component.scss']
})
export class Tp5DebutComponent {

  detail!: voiture
  voitureList: voiture[] = []

  constructor() {
    this.voitureList.push({ id: 0, marque: 'Peugeot', modele: '208' })
    this.voitureList.push({ id: 1, marque: 'Renaut', modele: 'Austral' })
    this.voitureList.push({ id: 2, marque: 'Fiat', modele: 'Punto' })

    this.regarderDetail(0);
  }

  regarderDetail(id: number) {
    this.detail = this.voitureList.filter(f => f.id === id)[0];
  }
}


interface voiture {
  id: number
  marque: string
  modele: string
}