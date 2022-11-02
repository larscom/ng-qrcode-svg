import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initialValue = {
    value: 'Hello World!',
    size: '250',
    backgroundColor: '#FFFFFF',
    foregroundColor: '#000000'
  };

  readonly formGroup = this.formBuilder.group(this.initialValue);

  readonly formGroupValue$ = this.formGroup.valueChanges.pipe(startWith(this.initialValue));

  readonly value$ = this.formGroupValue$.pipe(
    map(({ value }) => (value!?.length > 0 ? value : this.initialValue.value)),
    tap((value) => this.formGroup.get('value')?.reset(value, { emitEvent: false }))
  );
  readonly size$ = this.formGroupValue$.pipe(map(({ size }) => size));
  readonly backgroundColor$ = this.formGroupValue$.pipe(map(({ backgroundColor }) => backgroundColor));
  readonly foregroundColor$ = this.formGroupValue$.pipe(map(({ foregroundColor }) => foregroundColor));

  constructor(private readonly formBuilder: FormBuilder) {}
}
