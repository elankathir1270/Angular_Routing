import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  searchValue : string;
  coursesService = inject(CourseService);
  activatedRoute = inject(ActivatedRoute);
  AllCourses: Course[];

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.searchValue = param.get('search')
    });
    console.log(this.searchValue);


    if(this.searchValue === undefined || this.searchValue === '' || this.searchValue === null) {
      // this.coursesService.getAllCourses().subscribe((courses : Course[]) => {
      //   this.AllCourses = courses;
      // })
      this.AllCourses = this.activatedRoute.snapshot.data['courses'];
    }
    else{
      this.AllCourses = this.coursesService.courses.filter((course) =>
        course.title.toLowerCase()
      .includes(this.searchValue.toLowerCase()));
    }
  }
}
