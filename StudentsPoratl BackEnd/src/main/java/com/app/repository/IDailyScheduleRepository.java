package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.DailySchedule;

public interface IDailyScheduleRepository extends JpaRepository<DailySchedule, Integer>{

}
