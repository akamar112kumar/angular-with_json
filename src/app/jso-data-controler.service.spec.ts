import { TestBed } from '@angular/core/testing';

import { JsoDataControlerService } from './jso-data-controler.service';

describe('JsoDataControlerService', () => {
  let service: JsoDataControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsoDataControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
