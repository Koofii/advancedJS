import { TestBed, inject } from '@angular/core/testing';

import { LogserviceService } from './logservice.service';

describe('LogserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogserviceService]
    });
  });

  it('should be created', inject([LogserviceService], (service: LogserviceService) => {
    expect(service).toBeTruthy();
  }));
});
