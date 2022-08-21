import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = document.getElementsByName('card')[0];

    function print(){ 
      document.getElementsByName('card')[0].classList.toggle('flipped');
    }

    x.addEventListener('click', print, false);

  }

}
