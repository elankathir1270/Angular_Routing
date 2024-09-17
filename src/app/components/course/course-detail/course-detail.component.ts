import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  selectedCourse : Course;
  courseId : number;

  activatedRoute : ActivatedRoute  = inject(ActivatedRoute);
  courseService : CourseService = inject(CourseService);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = +param.get('id')

      this.selectedCourse = this.courseService.courses.find((course) => course.id === this.courseId)
    })

  }
}
