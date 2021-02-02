package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Student;

public interface IStudentRepository extends JpaRepository<Student, Integer> {

}
