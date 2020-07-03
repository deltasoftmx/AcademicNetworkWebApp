import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module'; //All material design modules to be used.

import { SingleFieldFormN2optionsComponent } from './single-field-form-n2options/single-field-form-n2options.component';

let components = [
  SingleFieldFormN2optionsComponent
]

let externalModules = [
  MaterialModule
]

@NgModule({
  declarations: components,
  imports: externalModules,
  exports: [
    components,
    externalModules
  ]
})
export class AppComponentsModule { }
