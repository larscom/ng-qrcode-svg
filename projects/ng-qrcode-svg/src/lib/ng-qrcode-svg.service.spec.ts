import { TestBed } from '@angular/core/testing';

import { NgQrcodeSvgService } from './ng-qrcode-svg.service';

describe('NgQrcodeSvgService', () => {
  let service: NgQrcodeSvgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgQrcodeSvgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
