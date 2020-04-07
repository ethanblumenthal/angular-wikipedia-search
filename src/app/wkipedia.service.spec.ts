import { TestBed } from '@angular/core/testing';

import { WkipediaService } from './wkipedia.service';

describe('WkipediaService', () => {
  let service: WkipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
