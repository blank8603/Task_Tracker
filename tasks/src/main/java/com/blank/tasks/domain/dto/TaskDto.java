package com.blank.tasks.domain.dto;

import com.blank.tasks.domain.entites.TaskPriority;
import com.blank.tasks.domain.entites.TaskStatus;

import java.time.LocalDateTime;
import java.util.UUID;

public record TaskDto(
    UUID id,
    String title,
    String description ,
    LocalDateTime dueDate,
    TaskStatus status,
    TaskPriority priority

) {
}

