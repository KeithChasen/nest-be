import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    { id: 1, title: 'Task 1', isCompleted: false },
    { id: 2, title: 'Task 2', isCompleted: true },
  ];

  findAll() {
    return this.tasks;
  }
}
