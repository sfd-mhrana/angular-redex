import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conuter',
  templateUrl: './conuter.component.html',
  styleUrls: ['./conuter.component.css']
})
export class ConuterComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    this.counter--;
  }

  onReset() {
    this.counter = 0;
  }
}
