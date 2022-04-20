import { TestBed } from '@angular/core/testing';

import { wfhService } from './wfh.service';

describe('WfhService', () => {
  let service: wfhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(wfhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
