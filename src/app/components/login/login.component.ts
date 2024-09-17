import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;


  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'))

      if(logout) {
        this.authService.logout();
        alert("You are Logged out now")
      }
    })
  }

  OnLoginClicked(){

    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    console.log(username,password);

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials you have entered is not correct.')
    }
    else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\courses']);
    }
  }

}
