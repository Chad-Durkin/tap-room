import { Component }  from '@angular/core';
import { Keg }        from './keg';
//
// const KEGS: Keg[] = [];
// KEGS.push(new Keg('Sierra Nevada', 'Torpedo', 7.4, 145));
// KEGS.push(new Keg('Sierra Nevada', 'Old Chico', 6.4, 145));
// KEGS.push(new Keg('Sierra Nevada', 'Bigfoot Ale', 7.1, 145));
// KEGS.push(new Keg('Sierra Nevada', 'Pale Ale', 5.9, 130));
// KEGS.push(new Keg('Sierra Nevada', 'Nooner', 4.8, 130));

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="beerSelection">
      <h1>Welcome to the tap room!</h1>
      <h2>Here you will be able to tap new kegs and also buy pints</h2>
      <h2>Total Sales: {{totalSales}}$</h2>
      <h2>Pints Sold: {{pintsSold}}!</h2>
      <div class="row">
      <div class="col-md-8">
      <!-- Full Kegs -->
      <h1 class="fullHeader">Kegs that still have beer</h1>
      <div *ngFor="let keg of kegs">
        <div *ngIf="keg.pints > 0">
            <ul>
              <li [class.selected]="keg === selectedKeg">
                <span class="kegInfo" *ngIf="keg.pints > 10">
                <span class="indKeg">Keg Name: <span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
                Alcohol Pecentage: {{keg.alcoholContent}}%<br>
                Price: {{keg.price}}$ a Pint<br>
                Pints Remaining: {{keg.pints}} </span>
                <!-- Edit Keg -->
                <button (click)="sellPint(keg)">Sell Pint</button>
                <button (click)="onSelect(keg)">Edit</button>
              </li>
            </ul>
        </div>
      </div>
      <!-- Refill Kegs -->
      <div *ngFor="let keg of kegs">
        <div *ngIf="keg.pints <= 10 ">
        <div *ngIf="keg.pints > 0 ">
        <h1 class="refillHeader">Kegs that need a refill</h1>
          <ul>
            <li [class.selected]="keg === selectedKeg">
            <span class="kegInfo">
            <span class="indKeg">Keg Name: <span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
            Alcohol Pecentage: {{keg.alcoholContent}}%<br>
            Price: {{keg.price}}$ a Pint<br>
            Pints Remaining: {{keg.pints}} </span>
            <!-- Edit Keg -->
            <button (click)="refillKeg(keg)">Refill</button>
            <button (click)="sellPint(keg)">Sell Pint</button>
            <button (click)="onSelect(keg)">Edit</button>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <!-- Empty Kegs -->
      <div *ngFor="let keg of kegs">
        <div *ngIf="keg.pints <= 0">
        <h1 class="emptyHeader">Kegs that are empty</h1>
          <ul>
            <li [class.selected]="keg === selectedKeg">
            <span class="kegInfo">
            <span class="indKeg">Keg Name: <span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
            Alcohol Pecentage: {{keg.alcoholContent}}%<br>
            Price: {{keg.price}}$ a Pint<br>
            Pints Remaining: {{keg.pints}} </span>
            <!-- Edit Keg -->
            <button (click)="refillKeg(keg)">Refill</button>
            <button (click)="onSelect(keg)">Edit</button>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add Kegs -->
      <button class="addKegForm" (click)="showKegForm()">Show Keg Forms</button>
      <button class="addKegForm" (click)="hideKegForm()">Hide Keg Forms</button>
      <add-keg (newKegSender)="addKeg($event)"  [showForm]="showForm" ></add-keg>
      </div>
      <div class="col-md-4">
      <keg-detail [keg]="selectedKeg"></keg-detail>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .beerSelection {
      background-color: #52A77E;
      padding: 20px;
    }
    .kegInfo {
      font-weight: bold;
    }
    .kegName {
      color: #DCC752;
    }
    `]
})

export class AppComponent {

  // kegs = KEGS;
  showForm = false;
  totalSales = 0;
  pintsSold = 0;
  selectedKeg: Keg;
  refillThisKeg: Keg;
  soldPint: Keg;

  kegs: Keg[] = [
    new Keg('Sierra Nevada', 'Torpedo', 7.4, 5),
    new Keg('Sierra Nevada', 'Old Chico', 6.4, 5),
    new Keg('Sierra Nevada', 'Bigfoot Ale', 7.1, 5),
    new Keg('Sierra Nevada', 'Pale Ale', 5.9, 4),
    new Keg('Sierra Nevada', 'Nooner', 4.8, 4)
  ];

  onSelect(keg: Keg): void{
    this.selectedKeg = keg;
  }

  refillKeg(keg: Keg): void{
    this.refillThisKeg = keg;
    this.refillThisKeg.pints = 124;
  }

  sellPint(keg: Keg): void{
    this.soldPint = keg;
    this.soldPint.pints -= 1;
    this.totalSales += this.soldPint.price;
    this.pintsSold += 1;
  }

  showKegForm(): void{
    this.showForm = true;
  }

  hideKegForm(): void{
    this.showForm = false;
  }

  addKeg(newKegFromChild: Keg) {
    this.kegs.push(newKegFromChild);
  }

}
