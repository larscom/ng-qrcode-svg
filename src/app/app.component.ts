import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly initialValue = {
    value: 'Hello World!',
    borderSize: 2,
    backgroundColor: '#FFFFFF',
    foregroundColor: '#000000'
  };

  readonly size = '250px';
  readonly formGroup = this.formBuilder.group(this.initialValue);
  readonly formGroupValue$ = this.formGroup.valueChanges.pipe(startWith(this.initialValue));

  readonly value$ = this.formGroupValue$.pipe(map(({ value }) => value));
  readonly borderSize$ = this.formGroupValue$.pipe(map(({ borderSize }) => borderSize));
  readonly backgroundColor$ = this.formGroupValue$.pipe(
    map(({ backgroundColor }) => backgroundColor),
    shareReplay()
  );
  readonly foregroundColor$ = this.formGroupValue$.pipe(map(({ foregroundColor }) => foregroundColor));

  constructor(private readonly formBuilder: FormBuilder) {}
}
