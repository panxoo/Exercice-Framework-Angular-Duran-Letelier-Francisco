import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tp1-exercice',
  templateUrl: './tp1-exercice.component.html',
  styleUrls: ['./tp1-exercice.component.scss']
})
export class Tp1ExerciceComponent {

  @Input() titre: string = "titre"
  @Input() sousTitre: string = "sousTitre"
  @Input() description: string = "description"
  @Input() lien: string = "lien"

}
