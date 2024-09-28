package org.example.trees.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.trees.entities.Tree;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

@Service
public class TreeService {
    public Tree getTrees() {
        try {
            // Load the JSON file from the resources folder
            InputStream inputStream = getClass().getResourceAsStream("/jsons/trees.json");
            if (inputStream == null) {
                throw new FileNotFoundException("Resource not found: /trees.json");
            }

            // Read the JSON file and convert it to an array of Plant objects
            ObjectMapper objectMapper = new ObjectMapper();
            Tree tree = objectMapper.readValue(inputStream, Tree.class);

            return tree;
        } catch (IOException e) {
            e.printStackTrace();
            return new Tree(); // Return an empty array in case of an error
        }
    }

    public Tree count(Double sum) {
        Tree tree = getTrees();
        Tree result = new Tree();

        result.setOldTree100((sum / (tree.getOldTree100() / 365.0)));
        result.setOldTree20To30((sum / (tree.getOldTree20To30() / 365.0)));
        result.setYoungTree(sum / (tree.getYoungTree() / 365.0));

        return result;
    }
}
