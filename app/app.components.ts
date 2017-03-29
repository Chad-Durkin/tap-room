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
      <div class="row">
      <div class="col-md-8">
      <ul>
        <li *ngFor="let keg of kegs" [class.selected]="keg === selectedKeg" (click)="onSelect(keg)">
          <span class="indKeg">Keg Name: <span class="kegName">{{keg.name}}</span> By: <span class="kegBrand">{{keg.brand}}</span></span><br>
          Alcohol Pecentage: {{keg.alcoholContent}}% Price: {{keg.price}}<br>
          Pints Remaining: {{keg.pints}}
        </li>
      </ul>
      <button class="addKegForm" (click)="showKegForm()">Show Keg Forms</button>
      <button class="addKegForm" (click)="hideKegForm()">Hide Keg Forms</button>
      <add-keg (newKegSender)="addKeg($event)"  [showForm]="showForm" ></add-keg>
      </div>
      <div class="col-md-4">
      <keg-detail [keg]="selectedKeg"></keg-detail>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

  // kegs = KEGS;
  showForm = false;
  selectedKeg: Keg;

  kegs: Keg[] = [
    new Keg('Sierra Nevada', 'Torpedo', 7.4, 145),
    new Keg('Sierra Nevada', 'Old Chico', 6.4, 145),
    new Keg('Sierra Nevada', 'Bigfoot Ale', 7.1, 145),
    new Keg('Sierra Nevada', 'Pale Ale', 5.9, 130),
    new Keg('Sierra Nevada', 'Nooner', 4.8, 130)
  ];

  onSelect(keg: Keg): void{
    this.selectedKeg = keg;
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
