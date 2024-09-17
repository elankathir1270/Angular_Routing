import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  course;


  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  years: number[] = [2023, 2024, 2025, 2026];

  router : Router = inject(Router)

  ngOnInit() {
    //this.course = this.router.getCurrentNavigation().extras.state;
    this.course = history.state;
  }

  onSubmit() {
  }

}
