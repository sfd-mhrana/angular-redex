import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
 
@Component({ 
  selector: 'app-conter-buttons',
  templateUrl: './conter-buttons.component.html',
  styleUrls: ['./conter-buttons.component.css']
})
export class ConterButtonsComponent implements OnInit {

  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
