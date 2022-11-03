# @larscom/ng-qrcode-svg

[![npm-version](https://img.shields.io/npm/v/@larscom/ng-qrcode-svg.svg?label=npm)](https://www.npmjs.com/package/@larscom/ng-qrcode-svg)
![npm](https://img.shields.io/npm/dw/@larscom/ng-qrcode-svg)
[![license](https://img.shields.io/npm/l/@larscom/ng-qrcode-svg.svg)](https://github.com/larscom/ng-qrcode-svg/blob/master/LICENSE)
[![CodeQL](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml)
[![npm-publish](https://github.com/larscom/ng-qrcode-svg/actions/workflows/npm-merge.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/npm-merge.yml)
[![firebase-hosting](https://github.com/larscom/ng-qrcode-svg/actions/workflows/firebase-hosting-merge.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/firebase-hosting-merge.yml)

> Simple and powerful QR code generator (SVG only) for Angular.

![Demo GIF](https://github.com/larscom/ng-qrcode-svg/blob/master/.github/img/demo.gif)

### ✨ [Live Demo](https://ng-qrcode-svg.web.app)

## Installation

```bash
npm install @larscom/ng-qrcode-svg
```

## Usage

1. Import module `QrcodeSvgModule`

```ts
import { NgModule } from '@angular/core';
import { QrcodeSvgModule } from '@larscom/ng-qrcode-svg';

@NgModule({
  imports: [
    QrcodeSvgModule // <-- import
  ]
})
export class MyModule {}
```

2. Use the `qrcode-svg` component which will render a QR code in SVG format

```html
<qrcode-svg value="hello world!"></qrcode-svg>
```

## Component Properties

| Name                                                     | Description                                               | Default   |
| -------------------------------------------------------- | --------------------------------------------------------- | --------- |
| @Input() value: string;                                  | The value to encode (turns into QR code)                  | undefined |
| @Input() ecc: 'low' \| 'medium' \| 'quartile' \| 'high'; | Error correction level                                    | medium    |
| @Input() borderSize: number;                             | The padding between the edge and the QR code (quiet zone) | 2         |
| @Input() size: string \| number;                         | The size of the QR code SVG (px,em,rem)                   | 250       |
| @Input() backgroundColor: string;                        | The 'path' color (background)                             | #FFFFFF   |
| @Input() foregroundColor: string;                        | The 'rect' color (foreground)                             | #000000   |
| @Input() alt: string \| undefined;                       | HTML alt attribute                                        | undefined |
| @Input() ariaLabel: string \| undefined;                 | HTML aria-label attribute                                 | undefined |
