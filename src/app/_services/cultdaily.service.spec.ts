import { TestBed } from '@angular/core/testing';

import { CultdailyService } from './cultdaily.service';

describe('CultdailyService', () => {
  let service: CultdailyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CultdailyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
