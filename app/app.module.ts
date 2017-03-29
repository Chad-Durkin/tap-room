import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AddKegComponent }  from './add-keg.component'

import { AppComponent }     from './app.components';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  AddKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
