package org.example.basic;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class BasicController {
  @GetMapping("/hello")
  public ResponseEntity<String> login() {
    return new ResponseEntity<String>("Hello",HttpStatus.OK);
  }

}
