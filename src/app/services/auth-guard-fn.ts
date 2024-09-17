import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { CourseService } from "./course.service";


export const CanActivate = () => {

  const authService : AuthService = inject(AuthService)
  const route : Router = inject(Router)

  if(authService.isAuthenticated()) {
    return true;
  }
  else{
    route.navigate(['/login'])
    return false;
  }
}

export const CanActivateChild = () => {
  return CanActivate();
}

export const Resolve = () => {
  const courseService : CourseService = inject(CourseService);
  return courseService.getAllCourses();
}
