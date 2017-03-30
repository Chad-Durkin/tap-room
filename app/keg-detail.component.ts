import { Component, Input }   from '@angular/core';
import { Keg}   from './keg';

@Component({
    selector: 'keg-detail',
    template: `
    <div class="editForm" *ngIf="keg">
      <h2>{{keg.name}} By {{keg.brand}}</h2>
      <div class="form-group">
        <label>Keg Type: </label>{{keg.name}}
        <input [(ngModel)]="keg.name" placeholder="Type">
      </div>
      <div class="form-group">
        <label>Keg Brand: </label>{{keg.brand}}
        <input [(ngModel)]="keg.brand" placeholder="Brand">
      </div>
      <div class="form-group">
        <label>Alcohol Content: </label>{{keg.alcoholContent}}
        <input [(ngModel)]="keg.alcoholContent" placeholder="Alcohol Content">
      </div>
      <div class="form-group">
        <label>Keg Price: </label> {{keg.price}}
        <input [(ngModel)]="keg.price" placeholder="Keg Price">
      </div>
      <div class="form-group">
        <label>Keg Pints: </label> {{keg.pints}}
        <input [(ngModel)]="keg.pints" placeholder="Keg Pints">
      </div>
    `
})

export class KegDetailComponent {
  @Input() keg: Keg;
}
