import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Keg }  from './keg'

@Component({
  selector: 'keg-display',
  template: `
    <full-keg [childKegsList]="kegsList" (childSelectedKeg)="onSelect($event)" (childOPSellPint)="sellPint($event)" (childTotalSales)="totalSalesCall($event)" (childTotalPints)="totalPintsSold($event)">Full Keg Content Loading...</full-keg>
    <low-keg [childKegsList]="kegsList" (childSelectedKeg)="onSelect($event)" (childOPSellPint)="sellPint($event)" (childTotalSales)="totalSalesCall($event)" (childTotalPints)="totalPintsSold($event)">Low Keg Content Loading...</low-keg>
    <empty-keg [childKegsList]="kegsList" (childSelectedKeg)="onSelect($event)" (childOPSellPint)="sellPint($event)" (childTotalSales)="totalSalesCall($event)" (childTotalPints)="totalPintsSold($event)">Empty Keg Content Loading...</empty-keg>
  `
})

export class KegDisplayComponent {
  @Input() kegsList: Keg[];
  @Output() selectedKeg = new EventEmitter();
  @Output() thePintsSold = new EventEmitter();
  @Output() totalSales = new EventEmitter();
  @Output() indKegPints = new EventEmitter();

  theKeg: Keg;
  kegPintCounter: Keg;
  totalCount = 0;
  totalPints = 0;

  onSelect(chosenKeg: Keg) {
    this.theKeg = chosenKeg;
    this.selectedKeg.emit(this.theKeg);
  }

  sellPint(chosenKeg: Keg) {
    this.kegPintCounter = chosenKeg;
    this.indKegPints.emit(this.kegPintCounter);
  }

  totalSalesCall(saleTotal: number) {
    this.totalCount = saleTotal;
    this.totalSales.emit(this.totalCount);
  }

  totalPintsSold(pintCounter: number) {
    this.totalPints = pintCounter;
    this.thePintsSold.emit(this.totalPints);
  }
  // childKegPintsSold(chosenKeg: Keg) {
  //   this.kegPintCounter = chosenKeg;
  //   this.indKegPints.emit(this.chosenKeg);
  //   this.soldPints.emit(this.kegPintCounter);
  // }
}
