import { TestBed } from '@angular/core/testing';

import { SOWContractService } from "./sowcontract.service.";

describe('SOWContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SOWContractService = TestBed.get(SOWContractService);
    expect(service).toBeTruthy();
  });
});
