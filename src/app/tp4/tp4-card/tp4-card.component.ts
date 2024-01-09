import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tp4-card',
  templateUrl: './tp4-card.component.html',
  styleUrls: ['./tp4-card.component.scss']
})
export class Tp4CardComponent {
  @Input() photo: string = ""
  @Input() nom: string = ""
  @Input() cri: string = ""

  showAlertCri() {
    alert(`le cri de l’animal est ${this.cri}`)
  }

}
