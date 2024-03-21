package com.example.EMFCourierService.controller;

import com.example.EMFCourierService.entity.DelivaryManDetails;
import com.example.EMFCourierService.entity.OrderDetails;

import com.example.EMFCourierService.exceptions.ResourceNotFoundException;

import com.example.EMFCourierService.repository.OrderDetailsRepo;

import com.example.EMFCourierService.service.OrderService;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;

@DynamicUpdate
@RestController
@CrossOrigin(origins = {"*"})
public class OrderDetailsController {
    @Autowired
    private OrderDetailsRepo orderDetailsRepo;
    @Autowired
    private OrderService service;
    @Autowired
    private final JavaMailSender javaMailSender;

    public OrderDetailsController(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }


    @PatchMapping("/order/update/{orId}/{delId}")
    public void orderUpdateInId(@PathVariable("orId") int orId, @PathVariable("delId") int delId) {
        OrderDetails od = orderDetailsRepo.getByorder_id(orId);
        od.setOrderActivityStatus("Processing");
        od.setDelivaryManDetails(new DelivaryManDetails(delId));
        orderDetailsRepo.save(od);
    }


    @GetMapping("/get_available_processing_order/{location}")
    public List<OrderDetails> getAvaPsOrd(@PathVariable("location") String loc) {
        return orderDetailsRepo.getStatusProcessing(loc);
    }



    @GetMapping("/get_out_for_del_order/{location}")
    public List<OrderDetails> getOutFor(@PathVariable("location") String loc) {
        return orderDetailsRepo.getStatusOutFroDelivery(loc);
    }

    @GetMapping("/done_order/{location}")
    public List<OrderDetails> getDelSec(@PathVariable("location") String loc) {
        return orderDetailsRepo.getStatusDelivered(loc);
    }

    //    Update Status "OUT FOR Delivery"
    @PutMapping("/order/out/{orId}")
    public void orderOutforDel(@PathVariable("orId") int orId) {
        OrderDetails od = orderDetailsRepo.getByorder_id(orId);
        od.setOrderActivityStatus("out for delivery");
        orderDetailsRepo.save(od);
    }

    @PutMapping("/order/del/{orId}")
    public void orderDelverd(@PathVariable("orId") int orId) {
        OrderDetails od = orderDetailsRepo.getByorder_id(orId);
        od.setOrderActivityStatus("Delivery done");
        orderDetailsRepo.save(od);
    }
    @GetMapping("/orderPanding/getall/{status}")
    public List<OrderDetails> getAllPendingOrder(@PathVariable("status") String status) {
        return orderDetailsRepo.getStatusPending(status);
    }

    @GetMapping("/order/getall")
    public List<OrderDetails> getAllOrder() {
        return orderDetailsRepo.findAll();
    }

    @PostMapping("/order/save")
    public OrderDetails save(@RequestBody OrderDetails orderDetails) throws MessagingException {
        orderDetails.setOrderActivityStatus("Pending");
        String uEmail = orderDetails.getEmail();

        System.out.println(".............");


        javax.mail.internet.MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
        message.setTo(orderDetails.getEmail());

        String html = "<!doctype html>\n" +
                "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\"\n" +
                "      xmlns:th=\"http://www.thymeleaf.org\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\"\n" +
                "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
                "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                "    <title>Email</title>\n" +
                "</head>\n" +
                "<body>\n" +

                "<div>welcome emf courier <b>" + orderDetails.getSenderName() + "</b></div>\n" +
                "\n" +
                "\n" +"Your Order summary is:- <br>"+
                "<div>Number of Item :-<b> "+ orderDetails.getNumberOfItem()+" </b></div>\n" +
                "<div>Package Weight :-<b> "+ orderDetails.getPackageWeight()+" </b></div>\n" +
                "<div>Product type is:-<b> "+ orderDetails.getSelectProductType()+" </b></div>\n"+

                "<div>Your Tracking Number is <b> "+ orderDetails.getOrderTrakingNumber()+" </b><br></div>\n" +
                "Our delivery man will contact you very soon, Thanks for being with us <br> <br>"+
                " EMF Courier " + "</b></div>\n" +
                "<div> Any Information Please Call us<b>" + " 01716371264 " + "</b></div>\n" +
                "</body>\n" +
                "</html>\n";

        message.setSubject("EMF Courier Confirm Registration");
        message.setFrom("info@emranhss.com");

        message.setText(html+ orderDetails.getOrderTrakingNumber(), true);
        javaMailSender.send(mimeMessage);

        // end email


        return orderDetailsRepo.save(orderDetails);

    }

    @GetMapping("/order/{id}")
    public OrderDetails getOne(@PathVariable(value = "id") int id) {

        return orderDetailsRepo.findById(id).get();
    }

    @GetMapping("/order/delete/{id}")
    public void delete(@PathVariable(value = "id") int id) {

        try {
            orderDetailsRepo.deleteById(id);
        } catch (Exception e) {
            throw new ResourceNotFoundException("No found data by this Id");
        }
    }
}

