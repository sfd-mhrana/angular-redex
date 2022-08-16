import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customeIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-component',
  templateUrl: './custom-counter-component.component.html',
  styleUrls: ['./custom-counter-component.component.css']
})
export class CustomCounterComponentComponent implements OnInit {
  value:number;
  name:string;

  constructor(private store:Store<{counter:CounterState}> ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      console.warn("name chage")
      this.name=data.name;
    })
  }

  onAdd(){
    this.store.dispatch(customeIncrement({value:+this.value}))
  }
}
