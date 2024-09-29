package org.example.trees.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Tree {
    @JsonProperty("100_old_tree")
    private double oldTree100;
    @JsonProperty("20_30_old_tree")
    private double oldTree20To30;
    @JsonProperty("young_tree")
    private double youngTree;
}
