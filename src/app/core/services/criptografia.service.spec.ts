/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CriptografiaService } from './criptografia.service';

describe('Service: Criptografia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriptografiaService]
    });
  });

  it('should ...', inject([CriptografiaService], (service: CriptografiaService) => {
    expect(service).toBeTruthy();
  }));
});
