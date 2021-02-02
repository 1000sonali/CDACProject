package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Placement;

public interface IPlacementRepository extends JpaRepository<Placement, String> {

}
