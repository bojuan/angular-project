import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuponCodes } from 'src/app/interfaces/order.interfaces';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  myForm!: FormGroup;

  @Input() subtotal: number = 99;
  @Input() codes: CuponCodes[] = [];

  @Output() changeCode = new EventEmitter<{
    index: number;
    isRemove?: boolean;
  }>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      cuponCodes: this.formBuilder.array(
        this.codes.map((item) => this.getEmptyFormGroup(item))
      ),
    });
  }

  getEmptyFormGroup(value?: CuponCodes) {
    console.log(value?.isValid)
    return this.formBuilder.group({
      code: [value?.code ?? '', [Validators.required]],
      isApplied: [value?.isApplied ?? false, [Validators.required]],
      isValid: [value?.isValid === true ? false : true, [Validators.required]],
      value: [0, [Validators.required]],
    });
  }

  get cuponCodesForm() {
    return this.myForm.get('cuponCodes') as FormArray;
  }

  get getRaws() {
    return this.cuponCodesForm.getRawValue();
  }

  addDynamicInput() {
    this.cuponCodesForm.push(this.getEmptyFormGroup());
  }

  handleSubmitCupon(indexInput: number) {
    const isRemove = this.getRaws.at(indexInput).isApplied;

    if (isRemove) {
      this.cuponCodesForm.removeAt(indexInput);
    } else {
      this.cuponCodesForm
        .at(indexInput)
        .get('isApplied')
        ?.setValue(!this.getRaws.at(indexInput).isApplied);
    }

    this.changeCode.emit({ index: indexInput, isRemove });
  }

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
