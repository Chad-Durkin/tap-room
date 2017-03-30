import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.components';
import { AddKegComponent }      from './add-keg.component';
import { KegDetailComponent }   from './keg-detail.component';
import { KegDisplayComponent }  from './keg-display.component';
import { FullKegComponent }     from './full-keg.component';
import { LowKegComponent }     from './low-keg.component';
import { EmptyKegComponent }     from './empty-keg.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  AddKegComponent,
                  KegDetailComponent,
                  KegDisplayComponent,
                  FullKegComponent,
                  LowKegComponent,
                  EmptyKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
