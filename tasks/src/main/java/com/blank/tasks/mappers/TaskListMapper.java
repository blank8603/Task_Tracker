package com.blank.tasks.mappers;

import com.blank.tasks.domain.dto.TaskDto;
import com.blank.tasks.domain.dto.TaskListDto;
import com.blank.tasks.domain.entites.TaskList;

public interface TaskListMapper {

    TaskList fromDto(TaskListDto taskListDto);

    TaskListDto toDto(TaskList taskList);
}
