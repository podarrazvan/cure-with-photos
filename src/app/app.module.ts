import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { CatsComponent } from './pages/cats/cats.component';
import { AuthComponent } from './auth/auth.component';
import { MemesComponent } from './pages/memes/memes.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainMessageComponent } from './pages/home-page/main-message/main-message.component';
import { WorkPlanComponent } from './pages/home-page/work-plan/work-plan.component';
import { FooterComponent } from './footer/footer.component';
import { PostPageComponent } from './pages/post-page/post-page.component'


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
    ProfileComponent,
    MainMessageComponent,
    WorkPlanComponent,
    FooterComponent,
    PostPageComponent 
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
