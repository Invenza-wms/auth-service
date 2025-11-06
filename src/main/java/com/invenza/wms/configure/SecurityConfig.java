package com.invenza.wms.configure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/auth/**",   // allow login/register APIs
                    "/api/users/**"   // allow user creation etc.
                ).permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable())   // disable Spring's login page
            .httpBasic(httpBasic -> httpBasic.disable()); // disable basic auth pop-up

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance(); // plain text passwords (ok for dev)
    }
}

