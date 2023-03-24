/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoconceptoService } from './tipoconcepto.service';

describe('Service: Tipoconcepto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoconceptoService]
    });
  });

  it('should ...', inject([TipoconceptoService], (service: TipoconceptoService) => {
    expect(service).toBeTruthy();
  }));
});
