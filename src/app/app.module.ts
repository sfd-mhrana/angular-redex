import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from '@angular/forms'

import { ConuterComponent } from './counter/conuter/conuter.component';
import { ConterOutputComponent } from './counter/conter-output/conter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';

import { counterReducer } from './rxcounter/state/counter.reducer';

import { CounterComponent } from './rxcounter/counter/counter.component';
import { CounterOutputComponent } from './rxcounter/counter-output/counter-output.component';
import { ConterButtonsComponent } from './rxcounter/conter-buttons/conter-buttons.component';
import { CustomCounterComponentComponent } from './rxcounter/custom-counter-component/custom-counter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ConuterComponent,
    ConterOutputComponent,
    CounterButtonsComponent,

    CounterComponent,
    CounterOutputComponent,
    ConterButtonsComponent,
    CustomCounterComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
