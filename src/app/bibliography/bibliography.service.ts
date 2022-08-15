import { Injectable } from '@angular/core';
import bibliography from './bibliography.sample';

@Injectable({
  providedIn: 'root'
})
export class BibliographyService {

  constructor() { }

  getHeaders(): Array<String> {
    return bibliography.headers;
  }

  getData(): Array<Array<String>> {
    return bibliography.data;
  }
}
