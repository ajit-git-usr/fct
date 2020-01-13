import { TestBed, inject } from '@angular/core/testing';

import { HandleTokenService } from './handle-token.service';

describe('HandleTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleTokenService]
    });
  });

  it('should be created', inject([HandleTokenService], (service: HandleTokenService) => {
    expect(service).toBeTruthy();
  }));
});
