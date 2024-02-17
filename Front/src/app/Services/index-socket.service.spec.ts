import { TestBed } from '@angular/core/testing';

import { IndexSocketService } from './index-socket.service';

describe('IndexSocketService', () => {
  let service: IndexSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
