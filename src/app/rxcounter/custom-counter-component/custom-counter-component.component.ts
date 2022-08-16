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

  constructor(private store:Store<{counter:CounterState}> ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.store.dispatch(customeIncrement({value:+this.value}))
  }
}
