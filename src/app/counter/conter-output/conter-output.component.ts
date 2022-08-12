import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conter-output',
  templateUrl: './conter-output.component.html',
  styleUrls: ['./conter-output.component.css']
})
export class ConterOutputComponent implements OnInit {
  @Input() counter=0;
  constructor() { }

  ngOnInit(): void {
  }

}
