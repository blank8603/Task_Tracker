package com.blank.tasks.controllers;

import com.blank.tasks.domain.dto.TaskListDto;
import com.blank.tasks.domain.entites.TaskList;
import com.blank.tasks.mappers.TaskListMapper;
import com.blank.tasks.services.TaskListService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path ="/task-lists")
public class TaskListController {

    private final TaskListService taskListService;

    private final TaskListMapper taskListMapper;

    public TaskListController(TaskListService taskListService, TaskListMapper taskListMapper) {
        this.taskListService = taskListService;
        this.taskListMapper = taskListMapper;
    }

    @GetMapping
    public List<TaskListDto> listTaskLists(){
        return taskListService.listTaskLists()
                .stream()
                .map(taskListMapper::toDto)
                .toList();
    }
}
