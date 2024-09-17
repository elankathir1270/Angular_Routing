import { Component, inject } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  courseService = inject(CourseService)
  popularCourses : Course[];

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter((course) => course.rating >= 4.5);
  }

}
