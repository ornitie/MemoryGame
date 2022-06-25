import { Injectable } from '@angular/core';
import { headers, data } from './grids.sample';

@Injectable({
  providedIn: 'root'
})
export class GridsService {

  constructor() { }

  getHeaders(): Array<String> {
    return headers;
  }

  getData(): Array<Array<String>> {
    return data;
  }
}
