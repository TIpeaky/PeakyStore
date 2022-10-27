package com.tipeaky.peakystore.model.enums;

import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public enum SizeEnum {
    XS("XS", "XS Size"),
    S("S", "S Size"),
    M("M", "M Size"),
    L("L", "L Size"),
    XL("XL", "XL Size"),
    XXL("XXL", "XXL Size");

    private String key;
    private String description;

    SizeEnum(String key, String description) {
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
