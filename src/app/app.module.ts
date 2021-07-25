import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from './modules/views/views.module';
import { HttpClientModule } from '@angular/common/http';
import { GroupPreferencesComponent } from './modules/dialogs/group-preferences/group-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupPreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
