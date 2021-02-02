package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Contactnumber;

	public interface IContactRepository extends JpaRepository<Contactnumber, Integer>{
		
	
}
