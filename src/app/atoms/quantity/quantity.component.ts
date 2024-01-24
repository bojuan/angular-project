import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input() value: number = 0

  increment(){
    this.value ++
  }

  decrement(){
    this.value --
  }
}
