# @larscom/ng-qrcode-svg

[![npm-version](https://img.shields.io/npm/v/@larscom/ng-qrcode-svg.svg?label=npm)](https://www.npmjs.com/package/@larscom/ng-qrcode-svg)
![npm](https://img.shields.io/npm/dw/@larscom/ng-qrcode-svg)
[![license](https://img.shields.io/npm/l/@larscom/ng-qrcode-svg.svg)](https://github.com/larscom/ng-qrcode-svg/blob/main/LICENSE)

> Simple QR code generator (SVG only) for Angular

![Demo GIF](https://github.com/larscom/ng-qrcode-svg/blob/main/.github/img/demo.gif)

## Installation

```bash
npm install @larscom/ng-qrcode-svg
```

## Usage

1. Import component `QrcodeSvgComponent`

```ts
import { NgModule } from '@angular/core'
import { QrcodeSvgComponent } from '@larscom/ng-qrcode-svg'

@NgModule({
  imports: [QrcodeSvgComponent]
})
export class MyModule {}
```

2. Use the `qrcode-svg` component which will render a QR code in SVG format

```html
<qrcode-svg value="hello world!"></qrcode-svg>
```

## Component Properties

| Name                                                    | Description                                               | Default   |
| ------------------------------------------------------- | --------------------------------------------------------- | --------- |
| @Input() value: string                                  | The value which need to be encoded                        | undefined |
| @Input() ecl: 'low' \| 'medium' \| 'quartile' \| 'high' | Error correction level                                    | medium    |
| @Input() borderSize: number                             | The padding between the edge and the QR code (quiet zone) | 2         |
| @Input() size: string \| number                         | The size of the QR code SVG (css format)                  | 250px     |
| @Input() backgroundColor: string                        | The 'path' color (background)                             | #FFFFFF   |
| @Input() foregroundColor: string                        | The 'rect' color (foreground)                             | #000000   |
| @Input() alt: string \| undefined                       | HTML alt attribute                                        | undefined |
| @Input() ariaLabel: string \| undefined                 | HTML aria-label attribute                                 | undefined |
