package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Notes;

public interface INotesRepository extends JpaRepository<Notes, Integer> {

}
