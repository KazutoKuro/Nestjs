import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // //http://localhost:3000/tasks
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   //if we have any filters defined, call tasksService.getTaskWillFilters
  //   // otherwise, just get all tasks
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // //http://localhost:3000/tasks/lsjflsdfksf3242
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // // @Post()
  // // createTask(@Body() body) {
  // //   console.log('body', body);
  // // }

  // // @Post()
  // // createTask(
  // //   @Body('title') title: string,
  // //   @Body('description') description: string,
  // // ): Task {
  // //   return this.tasksService.createTask(title, description);
  // // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string, 
  //   @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const {status} = UpdateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }


  // With Database TypeOrm //

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }

  @Get('/:id')
  getTaskbyId(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
   }

   @Post()
   createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
     return this.tasksService.createTask(createTaskDto);
   }

   @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string, 
    @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const {status} = UpdateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
