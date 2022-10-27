package com.tipeaky.peakystore.model.enums;

import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public enum SectionEnum {
    MALE("MA", "Male"),
    FEMALE("FE", "Female"),
    UNISEX("UN", "Unisex"),
    MALE_CHILDREN("MC", "Male Children"),
    FEMALE_CHILDREN("FC", "Female Children"),
    UNISEX_CHILDREN("UC", "Unisex Children");

    private String key;
    private String description;

    SectionEnum(String key, String description) {
        this.key = key;
        this.description = description;
    }

    public String getKey() {
        return key;
    }

    public String getDescription() {
        return description;
    }

}

