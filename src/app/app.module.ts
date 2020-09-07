import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatsComponent } from './cats/cats.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UploadPageComponent,
    PageNotFoundComponent,
    CatsComponent
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
