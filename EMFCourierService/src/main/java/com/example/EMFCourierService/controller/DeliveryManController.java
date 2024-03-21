package com.example.EMFCourierService.controller;
import com.example.EMFCourierService.entity.DelivaryManDetails;


import com.example.EMFCourierService.exceptions.ResourceNotFoundException;
import com.example.EMFCourierService.repository.DelivaryManDetailsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/delivary")
public class DeliveryManController {

    @Autowired
    private DelivaryManDetailsRepo deliveryManRepository;

    @GetMapping("/getall")
    public List<DelivaryManDetails> getAllDelivary() {

        return deliveryManRepository.findAll();

    }

    @PostMapping("/save")
    public DelivaryManDetails save(@RequestBody DelivaryManDetails delivaryManDetails) {
        //System.out.print(senserDetails)
        delivaryManDetails.setHeroStatus(1);

        return deliveryManRepository.save(delivaryManDetails);
//     return new SenderDetails();
    }

    @GetMapping("/delivary/{id}")
    public DelivaryManDetails getOne(@PathVariable(value = "id") int id) {

        return deliveryManRepository.findById(id).get();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDeliveryMan(@PathVariable Integer id) {
        deliveryManRepository.deleteById(id);
    }
}