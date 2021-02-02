package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Course;

public interface ICourseRepository extends JpaRepository<Course, Integer> {

}
