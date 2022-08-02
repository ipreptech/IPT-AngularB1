import { Component, OnInit } from '@angular/core';

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
  studentDetails = [{
    id:1,
    name:'Sreekanth',
    age: 27,
    gender: 'M'
  },
  {
    id:2,
    name:'Rajesh',
    age: 26,
    gender: 'M'
  },
  {
    id:3,
    name:'Ramya',
    age: 24,
    gender: 'F'
  },
  {
    id:4,
    name:'Munna',
    age: 20,
    gender: 'M'
  },
  {
    id:5,
    name:'Afroz',
    age: 20,
    gender: 'M'
  },
  {
    id:6,
    name:'Jhansi',
    age: 23,
    gender: 'F'
  },
  {
    id:7,
    name:'Srikanth',
    age: 24,
    gender: 'M'
  }];
  tempStudentDetails = [
    {
      id:1,
      name:'Sreekanth',
      age: 27,
      gender: 'M'
    },
    {
      id:2,
      name:'Rajesh',
      age: 26,
      gender: 'M'
    },
    {
      id:3,
      name:'Ramya',
      age: 24,
      gender: 'F'
    },
    {
      id:4,
      name:'Munna',
      age: 20,
      gender: 'M'
    },
    {
      id:5,
      name:'Afroz',
      age: 20,
      gender: 'M'
    },
    {
      id:6,
      name:'Jhansi',
      age: 23,
      gender: 'F'
    },
    {
      id:7,
      name:'Srikanth',
      age: 24,
      gender: 'M'
    }
  ]

  ngOnInit(): void {
    this.tempStudentDetails = JSON.parse(JSON.stringify(this.studentDetails))

  }


  filterStudentDetails() {
    this.studentDetails = this.tempStudentDetails.filter( student => {
       return student.gender == this.gender
    })
  }
}
