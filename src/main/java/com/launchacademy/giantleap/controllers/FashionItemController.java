package com.launchacademy.giantleap.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class FashionItemController {
    @GetMapping("/")
    public String index() {
      return "fashion/list";
    }

    @GetMapping("/show")
    public String show() {
      return "fashion/show";
    }
}
