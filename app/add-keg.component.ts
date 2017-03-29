import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Keg }        from './keg'

@Component({
  selector: 'add-keg',
  template: `
  <div class="addForm" *ngIf="showForm === true">
  <form class="newKeg">
    <div class="form-group">
      <label for='brand'>Keg Brand</label>
      <input #newBrand>
    </div>
    <div class="form-group">
      <label for='name'>Keg Type</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label for='alcoholContent'>Alcohol Percentage</label>
      <input #newABV>
    </div>
    <div class="form-group">
      <label for='price'>Keg Price</label>
      <input #newPrice>
    </div>
    <button (click)="submitForm(newBrand.value, newName.value, newABV.value, newPrice.value); newBrand.value = ''; newName.value = ''; newABV.value = ''; newPrice.value = '';">Add Keg</button>
  </form>
  </div>
  `,
  styles: [
    `
    .addForm {
      margin-top: 50px;
    }
    `
  ]
})

export class AddKegComponent {
  @Input() showForm: boolean;
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, name: string, alcoholContent: number, price: number) {
    var newKegToAdd: Keg = new Keg(brand, name, alcoholContent, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
