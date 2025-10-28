package com.invenza.wms.controller;

import com.invenza.wms.model.InventoryItem;
import com.invenza.wms.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private InventoryRepository repo;

    @GetMapping
    public List<InventoryItem> list() {
        return repo.findAll();
    }

    @PostMapping
    public InventoryItem create(@RequestBody InventoryItem item) {
        return repo.save(item);
    }
}
