import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-statue.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
