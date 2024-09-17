import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((res) => {
      this.jumpIntoSection(res)
    })
  }

  jumpIntoSection(section : string) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  }

}
