import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Keg }  from './keg'

@Component({
  selector: 'high-abv',
  template: `
  <!-- Full Kegs -->
    <div class="beerMenu">
    <h1 class="fullHeader">Kegs that still have beer</h1>
      <div class="row">
        <div class="col-md-4">
          <h3>High Alcohol Content</h3>
          <div *ngFor="let keg of childKegsList">
            <div *ngIf="keg.pints > 10">
              <div *ngIf="keg.alcoholContent >= 7">
              <ul>
                <li [class.selected]="keg === selectedKeg">
                  <span class="kegInfo">
                  <span class="indKeg"><span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
                  Alcohol Pecentage: {{keg.alcoholContent}}%<br>
                  Price: {{keg.price}}$ a Pint<br>
                  Pints Remaining: {{keg.pints}} </span>
                  <!-- Edit Keg -->
                  <button (click)="childSellPint(keg)">Sell Pint</button>
                  <button (click)="childOnSelect(keg)">Edit</button>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Average Alcohol Content</h3>
          <div *ngFor="let keg of childKegsList">
            <div *ngIf="keg.pints > 10">
              <div *ngIf="keg.alcoholContent < 7">
                <div *ngIf="keg.alcoholContent >= 5">
                <ul>
                  <li [class.selected]="keg === selectedKeg">
                    <span class="kegInfo">
                    <span class="indKeg"><span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
                    Alcohol Pecentage: {{keg.alcoholContent}}%<br>
                    Price: {{keg.price}}$ a Pint<br>
                    Pints Remaining: {{keg.pints}} </span>
                    <!-- Edit Keg -->
                    <button (click)="childSellPint(keg)">Sell Pint</button>
                    <button (click)="childOnSelect(keg)">Edit</button>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Low Alcohol Content</h3>
          <div *ngFor="let keg of childKegsList">
            <div *ngIf="keg.pints > 10">
              <div *ngIf="keg.alcoholContent < 5">
                <div *ngIf="keg.alcoholContent >= 0">
                <ul>
                  <li [class.selected]="keg === selectedKeg">
                    <span class="kegInfo">
                    <span class="indKeg"><span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
                    Alcohol Pecentage: {{keg.alcoholContent}}%<br>
                    Price: {{keg.price}}$ a Pint<br>
                    Pints Remaining: {{keg.pints}} </span>
                    <!-- Edit Keg -->
                    <button (click)="childSellPint(keg)">Sell Pint</button>
                    <button (click)="childOnSelect(keg)">Edit</button>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .indKeg {
        font-weight: bold;
      }
    `]
})

export class HighAbvComponent {
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
