import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { UploadPageComponent } from "./upload-page/upload-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { CatsComponent } from './cats/cats.component';
// import { AuthGuard } from "./auth-guard.service";


const appRoutes: Routes = [
    {path: '', component: HomePageComponent}, 
    {path:'upload', component: UploadPageComponent},
    {path:'cats', component: CatsComponent},
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
