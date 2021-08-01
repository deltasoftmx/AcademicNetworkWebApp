//Modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularCropperjsModule } from 'angular-cropperjs';

//Components.
import { GroupPreferencesComponent } from './group-preferences/group-preferences.component';
import { ImageSquareCropperComponent } from './image-square-cropper/image-square-cropper.component';

let components = [
  GroupPreferencesComponent,
  ImageSquareCropperComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularCropperjsModule
  ],
  exports: components
})
export class DialogsModule { }
