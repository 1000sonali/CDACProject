package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ExamSchedule;

public interface IExamRepository extends JpaRepository<ExamSchedule, Integer> {

}
