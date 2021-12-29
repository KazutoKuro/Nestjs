import { TaskStatus } from '../task-statue.enum';

export class GetTasksFilterDto  {
  status?: TaskStatus;
  search?: string;
}
