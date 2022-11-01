# @larscom/ng-qrcode-svg

[![npm-version](https://img.shields.io/npm/v/@larscom/ng-qrcode-svg.svg?label=npm)](https://www.npmjs.com/package/@larscom/ng-qrcode-svg)
![npm](https://img.shields.io/npm/dw/@larscom/ng-qrcode-svg)
[![license](https://img.shields.io/npm/l/@larscom/ng-qrcode-svg.svg)](https://github.com/larscom/ng-qrcode-svg/blob/master/LICENSE)
[![master](https://github.com/larscom/ng-qrcode-svg/actions/workflows/master.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/master.yml)
[![CodeQL](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/larscom/ng-qrcode-svg/actions/workflows/codeql-analysis.yml)

Simple, yet powerful QR code generator (SVG only) for Angular.

## Notice

This library is in its early age, interface definitions might change in future releases.

## Installation

```bash
npm i --save @larscom/ng-qrcode-svg
```

## Usage

1. Import module: `NgQrcodeSvgModule`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgQrcodeSvgModule } from '@larscom/ng-qrcode-svg';
import { AppComponent } from './app';

@NgModule({
  imports: [
    BrowserModule,
    NgQrcodeSvgModule // <-- import NgQrcodeSvgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

2. Use the `ng-qrcode-svg` component which will render an SVG

```html
<ng-qrcode-svg value="hello world!"></ng-qrcode-svg>
```
