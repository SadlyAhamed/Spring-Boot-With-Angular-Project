package com.example.EMFCourierService.repository;

import com.example.EMFCourierService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
//    public User findByEmail(String email);

    Optional<User> findByEmail(String username);


    void deleteById(int id);
}
