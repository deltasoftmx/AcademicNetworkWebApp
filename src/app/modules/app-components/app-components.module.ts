import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module'; //All material design modules to be used.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SingleFieldFormN2optionsComponent } from './single-field-form-n2options/single-field-form-n2options.component';
import { ElementCardComponent } from './element-card/element-card.component';
import { ElementCardBoxComponent } from './element-card-box/element-card-box.component';

let components = [
  SingleFieldFormN2optionsComponent,
  ElementCardComponent,
  ElementCardBoxComponent
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
