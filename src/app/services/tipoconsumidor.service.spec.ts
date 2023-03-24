/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoconsumidorService } from './tipoconsumidor.service';

describe('Service: Tipoconsumidor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoconsumidorService]
    });
  });

  it('should ...', inject([TipoconsumidorService], (service: TipoconsumidorService) => {
    expect(service).toBeTruthy();
  }));
});
