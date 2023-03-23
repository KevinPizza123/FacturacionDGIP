/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormapagoService } from './formapago.service';

describe('Service: Formapago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormapagoService]
    });
  });

  it('should ...', inject([FormapagoService], (service: FormapagoService) => {
    expect(service).toBeTruthy();
  }));
});
