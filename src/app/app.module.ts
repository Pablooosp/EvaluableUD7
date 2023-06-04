import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    DocumentacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
