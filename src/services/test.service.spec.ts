import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// it('getsimple value should return String should be created', () => {
//   expect(service.getSimpleValue()).toBe('Simple Value');
//   expect(typeof service.getSimpleValue()).toEqual('string')
// });

