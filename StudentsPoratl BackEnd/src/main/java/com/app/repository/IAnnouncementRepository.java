package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Announcement;

public interface IAnnouncementRepository extends JpaRepository<Announcement, Integer>{

}
