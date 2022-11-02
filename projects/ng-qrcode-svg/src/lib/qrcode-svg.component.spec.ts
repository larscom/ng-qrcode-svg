import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeSvgComponent } from './qrcode-svg.component';

describe('QrcodeSvgComponent', () => {
  let component: QrcodeSvgComponent;
  let fixture: ComponentFixture<QrcodeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrcodeSvgComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
