import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tp3-button',
  templateUrl: './tp3-button.component.html',
  styleUrls: ['./tp3-button.component.scss']
})
export class Tp3ButtonComponent {
  @Input() compteurValeur: number = 0;
  @Output() compteurReturn: EventEmitter<number> = new EventEmitter<number>()


  onClickCompteur() {
    this.compteurValeur++
    this.compteurReturn.emit(this.compteurValeur)
  }

}
