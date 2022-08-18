import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './rxcounter/counter/counter.component';
import { HomeComponent } from './rxcounter/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'counter',component:CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
