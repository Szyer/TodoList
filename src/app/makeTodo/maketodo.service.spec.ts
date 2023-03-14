import { TestBed } from '@angular/core/testing';

import { MaketodoService } from './maketodo.service';

describe('MaketodoService', () => {
  let service: MaketodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaketodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
