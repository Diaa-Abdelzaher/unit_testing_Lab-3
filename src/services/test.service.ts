import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  public getSimpleValue() {
    return 'Simple Value';
  }
}
