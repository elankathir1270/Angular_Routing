import { Component } from '@angular/core';
import { IDeactivatedComponent } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivatedComponent {

  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';

  isSubmitted: boolean = false;

  onSubmit(){
    this.isSubmitted = true;
  }

  canExit(){
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted) {
      return confirm("You have unchanged changes, Do you want to navigate away");
    }
    else{
      return true
    }
  }

}
