import { TestBed } from '@angular/core/testing';

import { PlatosService } from './platos.service';

describe('PlatosService', () => {
  let service: PlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosService);
  });

  it('should be created', () => {
   // expect(service).toBeTruthy();
  });
});
