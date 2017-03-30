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
      <keg-display (selectedKeg)="onSelect($event)" (indKegPints)="soldPints($event)" (totalSales)="topTotalSales($event)" (thePintsSold)="totalPintsSold($event)"[kegsList]="kegs">Keg Display Loading...</keg-display>
      <!-- (soldPints)="kegPintsSold($event)" -->
      <!-- Add Kegs -->
      </div>
      <div class="row">
        <div class="col-md-6">
          <button class="addKegForm" (click)="showKegForm()">Show Keg Forms</button>
          <button class="addKegForm" (click)="hideKegForm()">Hide Keg Forms</button>
          <add-keg (newKegSender)="addKeg($event)"  [showForm]="showForm" ></add-keg>
        </div>
        <div class="col-md-6">
          <keg-detail [keg]="selectedKeg"></keg-detail>
        </div>
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
    .beerMenu {
      margin-left: 30px;
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

  soldPints(keg: Keg): void{
    this.soldPint = keg;
  }

  topTotalSales(totSales: number): void{
    this.totalSales = totSales;
  }

  totalPintsSold(pintSales: number): void{
    this.pintsSold = pintSales;
  }

  // refillKeg(keg: Keg): void{
  //   this.refillThisKeg = keg;
  //   this.refillThisKeg.pints = 124;
  // }

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
