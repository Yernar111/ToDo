import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})

export class MainComponent {
  constructor(private dataservice: DataService, private route: ActivatedRoute, private router: Router) {}
  newTask: string = '';
  task1$!: Observable<Task[]>;
  task: Task = {id: 0, description: '', is_done: false, user_id: 0};
  id: string | null = '';
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.task1$ = this.dataservice.get_tasks_by_user_id(Number(this.id));
  }

  addTask(){
    this.task = {id: 0, description: this.newTask, is_done: false, user_id: Number(this.id)};
    this.dataservice.create_task(this.task).subscribe((request) => {
      this.task1$ = this.dataservice.get_tasks_by_user_id(Number(this.id));
      console.log(request);
    });
  }

  toggleTask(task: Task){
    task.is_done = !task.is_done;
  }

  deleteTask(task_id: number){
    this.dataservice.delete_task(task_id).subscribe(() => {
      this.task1$ = this.dataservice.get_tasks_by_user_id(Number(this.id));
    });
  }

  logout(){
    this.router.navigate(['']);
  }
}
