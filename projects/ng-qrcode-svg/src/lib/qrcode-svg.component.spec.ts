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

  it('should throw error if value is missing', () => {
    component.value = '';

    expect(function () {
      component.ngOnChanges({});
    }).toThrow(Error('[@larscom/ng-qrcode-svg] You must provide a value!'));
  });

  it(`should throw error if foregroundColor doesn't match hex pattern`, () => {
    component.value = 'value';
    component.foregroundColor = 'invalid';

    expect(function () {
      component.ngOnChanges({});
    }).toThrow(Error('[@larscom/ng-qrcode-svg] You must provide a valid foregroundColor (HEX RGB) eg: #000000'));
  });

  it(`should throw error if backgroundColor doesn't match hex pattern`, () => {
    component.value = 'value';
    component.backgroundColor = 'invalid';

    expect(function () {
      component.ngOnChanges({});
    }).toThrow(Error('[@larscom/ng-qrcode-svg] You must provide a valid backgroundColor (HEX RGB) eg: #FFFFFF'));
  });
});
