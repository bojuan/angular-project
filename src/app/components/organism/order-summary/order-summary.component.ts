import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  @Output() subtotal: number = 99;
  @Output() codes: { isValid: boolean; code: string; value: number }[] = [
    {
      isValid: true,
      code: 'FASDASDF',
      value: 5,
    },
  ];

  get shipping() {
    return this.subtotal > 100 ? 0 : 5;
  }

  get total() {
    const totalCodes = this.codes
      .filter((item) => item.isValid)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
      );

    return this.subtotal + this.shipping - totalCodes;
  }
}
