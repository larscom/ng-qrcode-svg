# @larscom/ng-qrcode-svg

[![npm-version](https://img.shields.io/npm/v/@larscom/ng-qrcode-svg.svg?label=npm)](https://www.npmjs.com/package/@larscom/ng-qrcode-svg)
![npm](https://img.shields.io/npm/dw/@larscom/ng-qrcode-svg)
[![license](https://img.shields.io/npm/l/@larscom/ng-qrcode-svg.svg)](https://github.com/larscom/ng-qrcode-svg/blob/master/LICENSE)
[![master](https://github.com/larscom/ng-qrcode-svg/actions/workflows/master.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/master.yml)
[![CodeQL](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml)

Simple, yet powerful QR code generator (SVG only) for Angular.

## Installation

```bash
npm i --save @larscom/ng-qrcode-svg
```

## Usage

1. Import module: `QrcodeSvgModule`

```ts
import { NgModule } from '@angular/core';
import { QrcodeSvgModule } from '@larscom/ng-qrcode-svg';

@NgModule({
  imports: [
    QrcodeSvgModule // <-- import QrcodeSvgModule
  ]
})
export class MyModule {}
```

2. Use the `qrcode-svg` component which will render a QR code in SVG format

```html
<qrcode-svg value="hello world!"></qrcode-svg>
```
