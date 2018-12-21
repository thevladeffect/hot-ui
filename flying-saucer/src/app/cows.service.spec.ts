import { TestBed } from '@angular/core/testing';

import { CowsService } from './cows.service';

describe('CowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CowsService = TestBed.get(CowsService);
    expect(service).toBeTruthy();
  });
});
