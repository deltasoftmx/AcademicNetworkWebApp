import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module'; //All material design modules to be used.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SingleFieldFormN2optionsComponent } from './single-field-form-n2options/single-field-form-n2options.component';
import { ElementCardComponent } from './element-card/element-card.component';
import { ElementCardBoxComponent } from './element-card-box/element-card-box.component';
import { PublicationCardComponent } from './publication-card/publication-card.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { TextAndImageFormComponent } from './text-and-image-form/text-and-image-form.component';
import { PublicationDisplayComponent } from './publication-display/publication-display.component';

let components = [
  SingleFieldFormN2optionsComponent,
  ElementCardComponent,
  ElementCardBoxComponent,
  PublicationCardComponent,
  CommentBoxComponent,
  TextAndImageFormComponent,
  PublicationDisplayComponent
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
