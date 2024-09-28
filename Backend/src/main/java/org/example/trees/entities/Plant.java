package org.example.trees.entities;

import lombok.Data;

@Data
public class Plant {
    private String code;
    private String desc;
    private String assimilated;
    private int id;
    private String nameLatin;
    private String name;
    private String coAbsorbed;
    private String pmRemoved;
    private String energySaved;
    private int numberOfTrees;
}
