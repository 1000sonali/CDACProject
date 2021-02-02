package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Classroom;

public interface IClassroomRepository extends JpaRepository<Classroom, Integer> {

}
