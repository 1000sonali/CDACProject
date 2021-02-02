package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Faculty;

public interface IFacultyRepository extends JpaRepository<Faculty, Integer> {

}
