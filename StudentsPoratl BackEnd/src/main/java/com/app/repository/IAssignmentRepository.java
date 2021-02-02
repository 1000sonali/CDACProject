package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Assignments;

public interface IAssignmentRepository extends JpaRepository<Assignments, Integer> {

}
