import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Keg }  from './keg'

@Component({
  selector: 'full-keg',
  templateUrl: './app/full-keg.html',
  styles: [`
      .indKeg {
        font-weight: bold;
      }
    `]
})

export class FullKegComponent {
  @Input() childKegsList: Keg[];
  @Output() childSelectedKeg = new EventEmitter();
  @Output() childOPSellPint = new EventEmitter();
  @Output() childTotalSales = new EventEmitter();
  @Output() childTotalPints = new EventEmitter();

  theKeg: Keg;
  soldPint: Keg;
  pintsSold = 0;
  totalSales = 0;

  childOnSelect(chosenKeg: Keg) {
    this.theKeg = chosenKeg;
    this.childSelectedKeg.emit(this.theKeg);
  }

  childSellPint(chosenKeg: Keg) {
    this.soldPint = chosenKeg;
    this.soldPint.pints -= 1;
    this.childOPSellPint.emit(this.soldPint);
    this.totalSales += this.soldPint.price;
    this.childTotalSales.emit(this.totalSales);
    this.pintsSold += 1;
    this.childTotalPints.emit(this.pintsSold);
  }
}
