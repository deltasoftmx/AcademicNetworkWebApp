import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module'; //All material design modules to be used.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SingleFieldFormN2optionsComponent } from './single-field-form-n2options/single-field-form-n2options.component';
import { DataComponent } from './data/data.component';
import { DataListComponent } from './data-list/data-list.component';

let components = [
  SingleFieldFormN2optionsComponent,
  DataComponent,
  DataListComponent
]

let externalModules = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
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
