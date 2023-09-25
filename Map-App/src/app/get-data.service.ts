import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  getData() {
    return {
      name: '',
      age: 25,
      id: 100
    }
  }
}
