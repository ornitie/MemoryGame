import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {

  headers = ['one','two'];
  data = [['yep', 'yep']];

  constructor() { }

  ngOnInit(): void {
  }

}
