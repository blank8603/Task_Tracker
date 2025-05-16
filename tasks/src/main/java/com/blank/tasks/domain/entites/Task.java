package com.blank.tasks.domain.entites;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", updatable = false,nullable = false)
    private UUID id;

    @Column(name = "title" ,nullable = false ,updatable = true)
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="dueDate")
    private LocalDateTime dueDate;

    @Column(name="priority" , nullable = false)
    private TaskPriority priority;

    @Column(name = "created", nullable = false)
    private LocalDateTime created;


    @Column(name="updated", nullable = false)
    private LocalDateTime updated;

    public Task() {
    }


    public Task(UUID id, String title, String description, LocalDateTime dueDate, TaskPriority priority, LocalDateTime created, LocalDateTime updated) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.created = created;
        this.updated = updated;
    }

   
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public LocalDateTime getUpdated() {
        return updated;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
