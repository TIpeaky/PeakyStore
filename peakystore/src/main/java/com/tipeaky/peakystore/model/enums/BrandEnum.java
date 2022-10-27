package com.tipeaky.peakystore.model.enums;

public enum BrandEnum {

    NIKE("NI", "Nike"),
    ADIDAS("AD", "Adidas"),
    PUMA("PU", "Puma"),
    POLO_WEAR("PO", "Polo Wear"),
    FILA("FI", "Fila"),
    LACOSTE("LA", "Lacoste"),
    GUCCI("GU", "Gucci");

    private String key;
    private String description;

    BrandEnum(String key, String description) {
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
