import { Injectable } from '@angular/core';
import { IModalService } from '../modal/modal.service';
import database from '../../assets/database.json';

@Injectable({
  providedIn: 'root'
})
export class BibliographyService implements IModalService{

  constructor() { }

  execute(): void {};

  saveNewWord(){
    return;
  }

  getHeaders(): Array<String> {
    return database.bibliography.headers;
  }

  getData(): Array<Array<String>> {
    return database.bibliography.data;
  }
}
