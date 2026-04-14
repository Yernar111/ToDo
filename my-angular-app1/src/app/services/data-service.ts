import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  // private dataSource = new BehaviorSubject<number>(0); // Initial value
  // currentData$ = this.dataSource.asObservable();

  // setData(i: number){
  //   this.dataSource.next(i);
  // }

  get_tasks_by_user_id(id: number): Observable<Task[]> {
      return this.http.get<Task[]>(`http://127.0.0.1:8000/tasks/tasks_by_user/${id}/`);
  }
  create_task(task: Task): Observable<Task>{
    return this.http.post<Task>(`http://127.0.0.1:8000/tasks/`, task);
  }
  delete_task(id: number): Observable<Task>{
    return this.http.delete<Task>(`http://127.0.0.1:8000/tasks/${id}/`)
  }
}
