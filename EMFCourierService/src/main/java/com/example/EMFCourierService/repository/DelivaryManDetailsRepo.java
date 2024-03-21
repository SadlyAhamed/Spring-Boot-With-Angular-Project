package com.example.EMFCourierService.repository;


import com.example.EMFCourierService.entity.DelivaryManDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DelivaryManDetailsRepo extends JpaRepository<DelivaryManDetails, Integer> {
    @Query("select dlm from DelivaryManDetails dlm where dlm.heroStatus=1 and dlm.heroLocation=?1")
    public List<DelivaryManDetails> getDelivaryMan(String location);

}

