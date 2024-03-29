import { Injectable } from '@angular/core';
import grids from './grids.sample';

@Injectable({
  providedIn: 'root'
})
export class GridsService {

  constructor() { }

  getHeaders(): Array<String> {
    return grids.headers;
  }

  getData(): Array<Array<String>> {
    return grids.data;
  }
}
