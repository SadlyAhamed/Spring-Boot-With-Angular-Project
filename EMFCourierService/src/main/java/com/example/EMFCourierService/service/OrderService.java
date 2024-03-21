package com.example.EMFCourierService.service;

import com.example.EMFCourierService.entity.OrderDetails;
import com.example.EMFCourierService.repository.OrderDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderDetailsRepo orderDetailsRepo;

    public void updateStatus(OrderDetails orderDetails, int id){

    }





}
