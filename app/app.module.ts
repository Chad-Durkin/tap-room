import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.components';
import { AddKegComponent }      from './add-keg.component';
import { KegDetailComponent }   from './keg-detail.component';
import { KegDisplayComponent }  from './keg-display.component';
import { HighAbvComponent }     from './high-abv.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  AddKegComponent,
                  KegDetailComponent,
                  KegDisplayComponent,
                  HighAbvComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
