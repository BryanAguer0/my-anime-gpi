import { TestBed } from '@angular/core/testing';

import { OAuth } from './o-auth';

describe('OAuth', () => {
  let service: OAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
