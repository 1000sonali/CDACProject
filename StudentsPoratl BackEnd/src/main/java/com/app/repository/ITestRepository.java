package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Test;

public interface ITestRepository extends JpaRepository<Test, String> {

}
