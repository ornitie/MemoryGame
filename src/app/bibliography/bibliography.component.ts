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

  constructor(private bibliographyService: BibliographyService) { 
  }

  ngOnInit(): void {
    this.data = this.bibliographyService.getData();
    this.headers = this.bibliographyService.getHeaders();
  }

}
