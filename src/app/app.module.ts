import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestGridComponent } from './test-grid/test-grid.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  // Add Component Name Here!
  declarations: [AppComponent, HeaderComponent, TestGridComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
