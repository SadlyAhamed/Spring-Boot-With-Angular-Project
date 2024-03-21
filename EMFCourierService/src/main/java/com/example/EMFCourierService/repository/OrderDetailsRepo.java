package com.example.EMFCourierService.repository;

import com.example.EMFCourierService.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailsRepo extends JpaRepository<OrderDetails, Integer> {
    @Modifying
    @Query("update OrderDetails o set o.orderActivityStatus = :orderActivityStatus")
    int updateOrderActivityStatusByAllIgnoreCase(@Param("orderActivityStatus") String orderActivityStatus);


    @Query("select ord from OrderDetails ord where ord.orderActivityStatus='Processing' and ord.delivaryManDetails.heroLocation=?1")
    public List<OrderDetails> getStatusProcessing(String location);

    @Query("select ord from OrderDetails ord where ord.orderActivityStatus='out For delivery' and ord.delivaryManDetails.heroLocation=?1")
    public List<OrderDetails> getStatusOutFroDelivery(String location);

    @Query("select ord from OrderDetails ord where ord.orderActivityStatus='Delivery done' and ord.delivaryManDetails.heroLocation=?1")
    public List<OrderDetails> getStatusDelivered(String location);

    @Query("select o from OrderDetails o where o.user.userLocation=?1")
    public List<OrderDetails> findOrderDetailsById(int id);

    @Query("select ord from OrderDetails ord where ord.orderActivityStatus =?1")
    public List<OrderDetails> getStatusPending(String orderActivityStatus);

    @Query("select ord from OrderDetails ord where ord.id=?1")
    public OrderDetails getByorder_id(int ordId);

    public List<OrderDetails> findByOrderTrakingNumber(String orderTrakingNumber);


}
