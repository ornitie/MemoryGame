import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent {

  @Input()
    headers?: Array<String>;

  @Input()
    data?: Array<Array<String>>;

  constructor() {
    if (!this.headers){
      this.headers = ['one','two'];
    }

    if (!this.data){
      this.data = [['yep', 'nope'], ['something', 'else']];
    }
  }

}
