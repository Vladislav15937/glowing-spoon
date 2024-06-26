package ru.kata.spring.boot_security.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.entity.User;
import ru.kata.spring.boot_security.demo.service.UserService;
import java.security.Principal;

@RestController
@RequestMapping
public class AdminControllers {

    private final UserService userService;

    public AdminControllers(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user-data")
    public ResponseEntity<User> showUserDetails(Principal principal) {
        User user = userService.findByUsername(principal.getName()).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
