import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input()
    option?: Option;

  constructor() { }

  ngOnInit(): void {
  }

}
