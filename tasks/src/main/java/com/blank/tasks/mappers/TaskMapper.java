package com.blank.tasks.mappers;

import com.blank.tasks.domain.dto.TaskDto;
import com.blank.tasks.domain.entites.Task;

public interface TaskMapper {
    Task fromDto(TaskDto taskDto);

    TaskDto toDto(Task task);
}
