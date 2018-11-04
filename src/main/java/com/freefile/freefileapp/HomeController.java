package com.freefile.freefileapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "index";
    }

    @GetMapping("/faq")
    public String questions(){
        return "faq";
    }

}
