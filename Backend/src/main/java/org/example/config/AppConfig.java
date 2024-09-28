package org.example.config;

import org.example.config.security.UserSecurityService;
import org.example.user.AppUserRepository;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.example.util.components.CustomErrorAttributes;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
    AppUserRepository appUserRepository;

    @Bean
    public UserSecurityService userSecurity() {
        return new UserSecurityService(appUserRepository);
    }

    @Bean
    public ErrorAttributes errorAttributes() {
        return new CustomErrorAttributes();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
