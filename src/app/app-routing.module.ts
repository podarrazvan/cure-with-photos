import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { UploadPageComponent } from "./pages/upload-page/upload-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import { CatsComponent } from './pages/cats/cats.component';
import {AuthComponent} from './auth/auth.component';
import { MemesComponent } from './pages/memes/memes.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth/auth.guard'
// import { AuthGuard } from "./auth-guard.service";


const appRoutes: Routes = [
    {path: '', component: HomePageComponent}, 
    { path: 'auth', component: AuthComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    {path:'upload', component: UploadPageComponent},
    {path:'cats', component: CatsComponent},
    {path:'memes', component: MemesComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**',redirectTo: '/not-found'}
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
