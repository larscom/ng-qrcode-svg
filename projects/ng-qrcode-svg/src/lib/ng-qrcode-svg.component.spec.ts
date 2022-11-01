import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQrcodeSvgComponent } from './ng-qrcode-svg.component';

describe('NgQrcodeSvgComponent', () => {
  let component: NgQrcodeSvgComponent;
  let fixture: ComponentFixture<NgQrcodeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgQrcodeSvgComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgQrcodeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
