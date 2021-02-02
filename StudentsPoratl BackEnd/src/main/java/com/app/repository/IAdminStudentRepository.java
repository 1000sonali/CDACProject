package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.AdminStudent;

public interface IAdminStudentRepository extends JpaRepository<AdminStudent, Integer> {

}
