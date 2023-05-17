import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCatsComponent,
    CreateCatComponent,
    UpdateCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
