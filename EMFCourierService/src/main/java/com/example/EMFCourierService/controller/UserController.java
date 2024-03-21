package com.example.EMFCourierService.controller;

import com.example.EMFCourierService.entity.User;
import com.example.EMFCourierService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"*"})
public class UserController {
    @Autowired
    private UserRepository usr;

    @GetMapping("/user/all")
    public List<User> getAllUser(){

        return usr.findAll();

    }

    @PostMapping("/user/login")
    public Optional<User> login(@RequestBody User user){
        Optional<User> dbUser = usr.findByEmail(user.getEmail());
        if(dbUser == null) {
            throw new RuntimeException("Invalid email/password");
        }
        String userPwd = user.getPassword();
        String dbPwd = dbUser.get().getPassword();
        if(dbUser != null & userPwd.equals(dbPwd)){
            return dbUser;
        }
        throw new RuntimeException("Invalid email/password");

    }
    @PostMapping("user/save")
    public User save(@RequestBody User user){
        return usr.save(user);

    }
    @GetMapping("/user/delete/{id}")
    public void delete(@PathVariable(value = "id")int id){
        usr.deleteById(id);
    }
}
