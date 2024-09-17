import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CanActivate, CanActivateChild, Resolve } from './services/auth-guard-fn';

const routes: Routes = [
  {path:"", component : HomeComponent},
  //{path:"", redirectTo: "home", pathMatch:'full'},
  {path:"home", component : HomeComponent},
  {path: "courses", component : CourseComponent, resolve : {courses : Resolve}}, //resolve : {courses : AuthGuardService}
  //{path : "courses/course/:id", component : CourseDetailComponent},
  {path: "courses", canActivateChild : [CanActivateChild], children: [
    {path : "course/:id", component : CourseDetailComponent},
    {path: "popular", component : PopularComponent},
    {path : "checkout", component : CheckoutComponent}
  ]},
  {path : "login", component : LoginComponent},
  {path: "about", component : AboutComponent},
  {path: "contact", component : ContactComponent, canDeactivate:[(comp : ContactComponent) => {return comp.canExit()} ]}, //canDeactivate:[AuthGuardService]
  {path : "**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
