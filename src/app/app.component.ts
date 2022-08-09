import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IPT-AngularBatch1';
  studentId: number;
  studentAge: number;
  gender: string;
  studentDetails: any;
  isError = false;

  constructor(private app: AppService) {

  }

  ngOnInit(): void {
    const syudentDetailsResponse = this.app.getStudentDetails();
    syudentDetailsResponse.subscribe(data => {
      this.studentDetails = data;
      if(Array.isArray(this.studentDetails)) {
        this.studentDetails =  this.studentDetails[0]
      }
    }, error => {
      console.log(error);
      this.isError = true;
    })

  }

  search() {
    const syudentDetailsResponse = this.app.getStudentDetailss();
    syudentDetailsResponse.subscribe(data => {
      this.studentDetails = data;
      this.isError = false;
    }, error => {
      console.log(error);
      this.isError = true;
    })
  }


}
