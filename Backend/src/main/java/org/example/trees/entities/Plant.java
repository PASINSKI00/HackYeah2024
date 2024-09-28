package org.example.trees.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Plant {
    private String code;
    private String desc;
    private String assimilated;
    private int id;
    @JsonProperty("name_latin")
    private String nameLatin;
    private String name;
    @JsonProperty("co_absorbed")
    private String coAbsorbed;
    @JsonProperty("pm_removed")
    private String pmRemoved;
    @JsonProperty("energy_saved")
    private String energySaved;
    @JsonProperty("number_of_trees")
    private int numberOfTrees;
}
