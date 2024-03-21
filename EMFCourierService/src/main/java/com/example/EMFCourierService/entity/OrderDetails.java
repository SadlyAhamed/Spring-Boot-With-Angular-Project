package com.example.EMFCourierService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.UUID;

@Data  @AllArgsConstructor
@Entity
@Table(name="order_details")
@DynamicUpdate
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    private String senderName;
    @Column
    private String senderCell;
    @Column
    private String senderAddress;
    @Column
    private String userLocation;

    @Column
    private String recipientLocation;
    @Column
    private String recipientName;
    @Column
    private String recipientMobileNo;
    @Column
    private String recipientAddress;
    @Column

    private String selectProductType;
    @Column
    private String packageWeight ;
    @Column
    private String  numberOfItem;
    @Column
    private String payment;
    @Column
    String orderActivityStatus;
    @Column
    private String email;

    @Column( unique = true, updatable = false)
    private String orderTrakingNumber;

    public OrderDetails() {
        this.orderTrakingNumber = UUID.randomUUID().toString();
    }

    @ManyToOne
    @JoinColumn(name="user_id_fK")
    private User user;

    @ManyToOne
    @JoinColumn(name = "dl_id_fk", nullable = true)
    private DelivaryManDetails delivaryManDetails;

}
