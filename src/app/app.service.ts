import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getStudentDetails() {
   return   this.http.get('http://192.168.0.105:8082/student');
  }

  getStudentDetailss() {
    return   this.http.get('http://192.168.0.105:8082/student');
  }
}
