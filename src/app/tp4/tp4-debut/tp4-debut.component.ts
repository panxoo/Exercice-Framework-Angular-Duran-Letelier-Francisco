import { Component } from '@angular/core';

@Component({
  selector: 'app-tp4-debut',
  templateUrl: './tp4-debut.component.html',
  styleUrls: ['./tp4-debut.component.scss']
})
export class Tp4DebutComponent {

  animaux: animal[] = []

  constructor() {
    this.animaux.push({
      photo: "assets/animal/vache.jpg",
      nom: "Vache",
      cri: "muuuu",
    })
    this.animaux.push({
      photo: "assets/animal/chien.jpg",
      nom: "Chien",
      cri: "Guau Guau",
    })

    this.animaux.push({
      photo: "assets/animal/chat.jpg",
      nom: "Chat",
      cri: "Miau",
    })
  }
}

interface animal {
  photo: string
  nom: string
  cri: string
}