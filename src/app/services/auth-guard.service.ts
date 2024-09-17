import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../components/contact/contact.component';
import { Course } from '../model/course';
import { CourseService } from './course.service';

export interface IDeactivatedComponent {
  canExit : () => boolean | Observable<boolean> | Promise<boolean>
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivatedComponent>, Resolve<Course[]>{

  authService : AuthService = inject(AuthService)
  route : Router = inject(Router)
  courseService : CourseService = inject(CourseService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.isAuthenticated()) {
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(childRoute,state);
  }

  canDeactivate(component: IDeactivatedComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
    return component.canExit();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
      return this.courseService.getAllCourses();
  }
}
