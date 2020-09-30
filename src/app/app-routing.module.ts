import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { UploadPageComponent } from "./pages/upload-page/upload-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AuthComponent} from './auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth/auth.guard'
import { PostPageComponent } from './pages/post-page/post-page.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PostsComponent } from './pages/posts/posts.component';
import { DonatePageComponent } from './pages/donate-page/donate-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DmcaPageComponent } from './pages/dmca-page/dmca-page.component';
// import { AuthGuard } from "./auth-guard.service";


const appRoutes: Routes = [
    {path: '', component: HomePageComponent}, 
    {path: 'statistics', component: StatisticsComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path:'upload', component: UploadPageComponent, canActivate: [AuthGuard]},
    {path:'posts/:category', component: PostsComponent},
    {path:'post/:category/:uid/:name', component: PostPageComponent},
    {path:'donate', component: DonatePageComponent},
    {path:'contact', component: ContactPageComponent},
    {path:'dmca', component: DmcaPageComponent},
    {path:'terms-of-use', component: TermsOfUseComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**',redirectTo: '/not-found'}
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules, 
            useHash: true,
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
