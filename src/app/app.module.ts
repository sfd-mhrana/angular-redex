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
import { HomeComponent } from './rxcounter/home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { postsReducer } from './posts/state/post.reducer';
import { appReducer } from './store/app.state';

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
    
    HomeComponent,
         PostListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // StoreModule.forRoot({counter:counterReducer,posts:postsReducer})
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
