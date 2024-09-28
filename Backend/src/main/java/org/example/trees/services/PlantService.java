package org.example.trees.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.trees.entities.Plant;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

@Service
public class PlantService {

    private final RestTemplate restTemplate;

    public PlantService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable("plants")
    public Plant[] getPlants() {
//        String baseUrl = "https://krakow.lifeurbangreen.eu/api/krakow/species_tree_PL_V1";
//
//        // Create the filter parameter as a proper JSON object
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl)
//                .queryParam("filter", "{\"order\":[\"name ASC\"]}");
//
//        // Create headers similar to the ones provided in the cURL command
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Accept", "application/json, text/plain, */*");
//        headers.set("Accept-Language", "en-US,en;q=0.9,pl;q=0.8");
//        headers.set("DNT", "1");
//        headers.set("Referer", "https://krakow.lifeurbangreen.eu/pl/tree-species/");
//        headers.set("Sec-CH-UA", "\"Chromium\";v=\"129\", \"Not=A?Brand\";v=\"8\"");
//        headers.set("Sec-CH-UA-Mobile", "?0");
//        headers.set("Sec-CH-UA-Platform", "\"Windows\"");
//        headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36");
//
//        // Create an HttpEntity object with the headers
//        HttpEntity<String> entity = new HttpEntity<>(headers);
//
//        // Build the final URL with the properly encoded filter parameter
//        String finalUrl = builder.toUriString();
//
//        // Make the request and capture the response
//        ResponseEntity<Plant[]> response = restTemplate.exchange(
//                baseUrl,
//                HttpMethod.GET,
//                entity,
//                Plant[].class
//        );
//
//        return response.getBody(); // Return the array of Plant objects

        try {
            // Load the JSON file from the resources folder
            InputStream inputStream = getClass().getResourceAsStream("/plants.json");
            if (inputStream == null) {
                throw new FileNotFoundException("Resource not found: /plants.json");
            }

            // Read the JSON file and convert it to an array of Plant objects
            ObjectMapper objectMapper = new ObjectMapper();
            Plant[] plants = objectMapper.readValue(inputStream, Plant[].class);

            return plants;
        } catch (IOException e) {
            e.printStackTrace();
            return new Plant[0]; // Return an empty array in case of an error
        }
    }


}

