import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tp2-row',
  templateUrl: './tp2-row.component.html',
  styleUrls: ['./tp2-row.component.scss']
})
export class Tp2RowComponent {
  @Input() id: string = "0"
  @Input() Username: string = "username"
  @Input() AdresseMail: string = "Email"

}
