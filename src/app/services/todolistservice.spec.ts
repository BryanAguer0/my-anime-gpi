import { TestBed } from '@angular/core/testing';

import { Todolistservice } from './todolistservice';

describe('Todolistservice', () => {
  let service: Todolistservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todolistservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
