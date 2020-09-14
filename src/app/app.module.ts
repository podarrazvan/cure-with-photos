import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatsComponent } from './pages/cats/cats.component';
import { AuthComponent } from './auth/auth.component';
import { MemesComponent } from './pages/memes/memes.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UploadPageComponent,
    PageNotFoundComponent,
    CatsComponent,
    AuthComponent,
    MemesComponent,
    DropdownDirective,
    LoadingComponent,
    ProfileComponent 
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
