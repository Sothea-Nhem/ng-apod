import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor() { }

  getApod(): string{
    return 'Hello World';
  }

}