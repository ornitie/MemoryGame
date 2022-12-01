import { Component, OnInit } from '@angular/core';
import { BibliographyService } from './bibliography.service';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.css']
})
export class BibliographyComponent implements OnInit {

  data?: Array<Array<String>>;
  headers?: Array<String>;
  isModalOpen: String = '';

  constructor(private bibliographyService: BibliographyService) { 
    this.openModal = this.openModal.bind(this);
  }

  ngOnInit(): void {
    this.data = this.bibliographyService.getData();
    this.headers = this.bibliographyService.getHeaders();

    let x = document.getElementsByName('button')[0];
  }

  openModal(){
    console.log(this.isModalOpen);
    console.log(':v');
    this.isModalOpen = 'is-active';
  }

  closeModal = () => {
    this.isModalOpen = 'asdasd';
    return false;
  };

}
