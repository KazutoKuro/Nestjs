// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
// }
// Before using database, this file name is task.model.ts

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
