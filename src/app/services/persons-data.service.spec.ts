import { TestBed } from '@angular/core/testing';

import { PersonsDataService } from './persons-data.service';

describe('PersonsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonsDataService = TestBed.get(PersonsDataService);
    expect(service).toBeTruthy();
  });
});
