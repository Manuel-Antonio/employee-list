import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoCountComponent } from './components/empleado-list/empleado-count/empleado-count.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    EmpleadoCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
