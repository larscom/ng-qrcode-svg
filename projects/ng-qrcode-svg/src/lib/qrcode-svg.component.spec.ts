import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Shallow } from 'shallow-render'
import { QrcodeSvgComponent } from './qrcode-svg.component'

describe('QrcodeSvgComponent', () => {
  describe('Rendering', () => {
    let shallow: Shallow<QrcodeSvgComponent>

    beforeEach(() => {
      shallow = new Shallow(QrcodeSvgComponent)
    })

    it('should fully render the QR code', async () => {
      const element = `
      <qrcode-svg
        value="test"
        ecl="high"
        borderSize="4"
        size="400"
        backgroundColor="#C0C0C0"
        foregroundColor="#808080"
        alt="svg title"
        ariaLabel="svg"
       ></qrcode-svg>
       `
      const { find } = await shallow.render(element)

      const svg = find('svg')

      expect(svg.nativeElement.getAttribute('xmlns')).toEqual('http://www.w3.org/2000/svg')
      expect(svg.nativeElement.getAttribute('version')).toEqual('1.1')
      expect(svg.nativeElement.getAttribute('stroke')).toEqual('none')
      expect(svg.nativeElement.getAttribute('alt')).toEqual('svg title')
      expect(svg.nativeElement.getAttribute('aria-label')).toEqual('svg')
      expect(svg.nativeElement.getAttribute('width')).toEqual('400')
      expect(svg.nativeElement.getAttribute('height')).toEqual('400')
      expect(svg.nativeElement.getAttribute('viewBox')).toEqual('0 0 29 29')

      expect(svg.query(By.css('rect')).nativeElement.getAttribute('width')).toEqual('100%')
      expect(svg.query(By.css('rect')).nativeElement.getAttribute('height')).toEqual('100%')
      expect(svg.query(By.css('rect')).nativeElement.getAttribute('fill')).toEqual('#C0C0C0')

      expect(svg.query(By.css('path')).nativeElement.getAttribute('d').startsWith('M04,04h1v1h-1z')).toBeTruthy()
      expect(svg.query(By.css('path')).nativeElement.getAttribute('fill')).toEqual('#808080')
    })
  })

  describe('Tests', () => {
    let component: QrcodeSvgComponent
    let fixture: ComponentFixture<QrcodeSvgComponent>

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [QrcodeSvgComponent]
      }).compileComponents()

      fixture = TestBed.createComponent(QrcodeSvgComponent)
      component = fixture.componentInstance
    })

    it(`should create viewBox based on borderSize`, () => {
      fixture.componentRef.setInput('value', 'test')
      fixture.componentRef.setInput('borderSize', 4)

      expect(component.viewBox()).toEqual('0 0 29 29')
    })

    it(`should create d attribute based on borderSize`, () => {
      fixture.componentRef.setInput('value', 'test')
      fixture.componentRef.setInput('borderSize', 4)

      expect(component.d()).toEqual(
        'M4,4h1v1h-1z M5,4h1v1h-1z M6,4h1v1h-1z M7,4h1v1h-1z M8,4h1v1h-1z M9,4h1v1h-1z M10,4h1v1h-1z M12,4h1v1h-1z M13,4h1v1h-1z M14,4h1v1h-1z M16,4h1v1h-1z M18,4h1v1h-1z M19,4h1v1h-1z M20,4h1v1h-1z M21,4h1v1h-1z M22,4h1v1h-1z M23,4h1v1h-1z M24,4h1v1h-1z M4,5h1v1h-1z M10,5h1v1h-1z M13,5h1v1h-1z M14,5h1v1h-1z M18,5h1v1h-1z M24,5h1v1h-1z M4,6h1v1h-1z M6,6h1v1h-1z M7,6h1v1h-1z M8,6h1v1h-1z M10,6h1v1h-1z M14,6h1v1h-1z M18,6h1v1h-1z M20,6h1v1h-1z M21,6h1v1h-1z M22,6h1v1h-1z M24,6h1v1h-1z M4,7h1v1h-1z M6,7h1v1h-1z M7,7h1v1h-1z M8,7h1v1h-1z M10,7h1v1h-1z M12,7h1v1h-1z M15,7h1v1h-1z M16,7h1v1h-1z M18,7h1v1h-1z M20,7h1v1h-1z M21,7h1v1h-1z M22,7h1v1h-1z M24,7h1v1h-1z M4,8h1v1h-1z M6,8h1v1h-1z M7,8h1v1h-1z M8,8h1v1h-1z M10,8h1v1h-1z M14,8h1v1h-1z M15,8h1v1h-1z M18,8h1v1h-1z M20,8h1v1h-1z M21,8h1v1h-1z M22,8h1v1h-1z M24,8h1v1h-1z M4,9h1v1h-1z M10,9h1v1h-1z M13,9h1v1h-1z M15,9h1v1h-1z M18,9h1v1h-1z M24,9h1v1h-1z M4,10h1v1h-1z M5,10h1v1h-1z M6,10h1v1h-1z M7,10h1v1h-1z M8,10h1v1h-1z M9,10h1v1h-1z M10,10h1v1h-1z M12,10h1v1h-1z M14,10h1v1h-1z M16,10h1v1h-1z M18,10h1v1h-1z M19,10h1v1h-1z M20,10h1v1h-1z M21,10h1v1h-1z M22,10h1v1h-1z M23,10h1v1h-1z M24,10h1v1h-1z M13,11h1v1h-1z M16,11h1v1h-1z M6,12h1v1h-1z M8,12h1v1h-1z M9,12h1v1h-1z M10,12h1v1h-1z M12,12h1v1h-1z M13,12h1v1h-1z M17,12h1v1h-1z M21,12h1v1h-1z M24,12h1v1h-1z M7,13h1v1h-1z M8,13h1v1h-1z M11,13h1v1h-1z M12,13h1v1h-1z M16,13h1v1h-1z M18,13h1v1h-1z M19,13h1v1h-1z M23,13h1v1h-1z M24,13h1v1h-1z M4,14h1v1h-1z M5,14h1v1h-1z M6,14h1v1h-1z M7,14h1v1h-1z M8,14h1v1h-1z M10,14h1v1h-1z M12,14h1v1h-1z M16,14h1v1h-1z M17,14h1v1h-1z M18,14h1v1h-1z M19,14h1v1h-1z M21,14h1v1h-1z M22,14h1v1h-1z M23,14h1v1h-1z M24,14h1v1h-1z M4,15h1v1h-1z M5,15h1v1h-1z M6,15h1v1h-1z M7,15h1v1h-1z M9,15h1v1h-1z M12,15h1v1h-1z M13,15h1v1h-1z M15,15h1v1h-1z M16,15h1v1h-1z M19,15h1v1h-1z M20,15h1v1h-1z M23,15h1v1h-1z M4,16h1v1h-1z M5,16h1v1h-1z M9,16h1v1h-1z M10,16h1v1h-1z M12,16h1v1h-1z M13,16h1v1h-1z M14,16h1v1h-1z M19,16h1v1h-1z M21,16h1v1h-1z M23,16h1v1h-1z M24,16h1v1h-1z M12,17h1v1h-1z M14,17h1v1h-1z M15,17h1v1h-1z M16,17h1v1h-1z M21,17h1v1h-1z M24,17h1v1h-1z M4,18h1v1h-1z M5,18h1v1h-1z M6,18h1v1h-1z M7,18h1v1h-1z M8,18h1v1h-1z M9,18h1v1h-1z M10,18h1v1h-1z M13,18h1v1h-1z M14,18h1v1h-1z M20,18h1v1h-1z M21,18h1v1h-1z M23,18h1v1h-1z M24,18h1v1h-1z M4,19h1v1h-1z M10,19h1v1h-1z M12,19h1v1h-1z M13,19h1v1h-1z M14,19h1v1h-1z M16,19h1v1h-1z M18,19h1v1h-1z M23,19h1v1h-1z M4,20h1v1h-1z M6,20h1v1h-1z M7,20h1v1h-1z M8,20h1v1h-1z M10,20h1v1h-1z M12,20h1v1h-1z M14,20h1v1h-1z M15,20h1v1h-1z M18,20h1v1h-1z M20,20h1v1h-1z M21,20h1v1h-1z M23,20h1v1h-1z M24,20h1v1h-1z M4,21h1v1h-1z M6,21h1v1h-1z M7,21h1v1h-1z M8,21h1v1h-1z M10,21h1v1h-1z M13,21h1v1h-1z M18,21h1v1h-1z M19,21h1v1h-1z M23,21h1v1h-1z M4,22h1v1h-1z M6,22h1v1h-1z M7,22h1v1h-1z M8,22h1v1h-1z M10,22h1v1h-1z M12,22h1v1h-1z M16,22h1v1h-1z M17,22h1v1h-1z M19,22h1v1h-1z M22,22h1v1h-1z M24,22h1v1h-1z M4,23h1v1h-1z M10,23h1v1h-1z M13,23h1v1h-1z M14,23h1v1h-1z M15,23h1v1h-1z M17,23h1v1h-1z M18,23h1v1h-1z M19,23h1v1h-1z M20,23h1v1h-1z M21,23h1v1h-1z M23,23h1v1h-1z M4,24h1v1h-1z M5,24h1v1h-1z M6,24h1v1h-1z M7,24h1v1h-1z M8,24h1v1h-1z M9,24h1v1h-1z M10,24h1v1h-1z M14,24h1v1h-1z M17,24h1v1h-1z M18,24h1v1h-1z M19,24h1v1h-1z M22,24h1v1h-1z M23,24h1v1h-1z M24,24h1v1h-1z'
      )
    })
  })
})
