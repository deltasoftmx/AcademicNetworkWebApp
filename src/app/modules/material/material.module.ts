import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatCardModule } from '@angular/material/card'; 

let modules = [
  MatToolbarModule, 
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatCardModule
]


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
