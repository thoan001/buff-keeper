import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { reducer } from './reducers/buff.reducer';
import { BuffFormComponent } from './buff-form/buff-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    BuffFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({status: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
