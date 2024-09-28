package org.example.trees.controllers;

import org.example.trees.entities.Tree;
import org.example.trees.services.TreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TreeController {

    private final TreeService treeService;

    @Autowired
    public TreeController(TreeService treeService) {
        this.treeService = treeService;
    }

    @GetMapping("/tree")
    public Tree getTree() {
        return this.treeService.getTrees();
    }


    @GetMapping("/tree/count/{sum}")
    public Tree count(@PathVariable Double sum) {
        return this.treeService.count(sum);
    }
}
