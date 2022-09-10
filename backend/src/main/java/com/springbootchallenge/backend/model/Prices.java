package com.springbootchallenge.backend.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Prices {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "brand_id")
    private Integer brand_id;
    @Column(name = "start_date")
    private Timestamp start_date;
    @Column(name = "end_date")
    private Timestamp end_date;
    @Column(name = "price_list")
    private Integer price_list;
    @Column(name = "product_id")
    private Integer product_id;
    @Column(name = "priority")
    private Integer priority;
    @Column(name = "price")
    private Float price;
    @Column(name = "curr")
    private String curr;

    public Prices() {
    }
    public Prices ( Integer brand_id, Timestamp start_date, Timestamp end_date, Integer price_list, Integer product_id, Integer priority, Float price, String curr) {
        this.brand_id = brand_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price_list = price_list;
        this.product_id = product_id;
        this.priority = priority;
        this.price = price;
        this.curr = curr;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBrand_id() {
        return brand_id;
    }

    public void setBrand_id(Integer brand_id) {
        this.brand_id = brand_id;
    }

    public Timestamp getStart_date() {
        return start_date;
    }

    public void setStart_date(Timestamp start_date) {
        this.start_date = start_date;
    }

    public Timestamp getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Timestamp end_date) {
        this.end_date = end_date;
    }

    public Integer getPrice_list() {
        return price_list;
    }

    public void setPrice_list(Integer price_list) {
        this.price_list = price_list;
    }

    public Integer getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Integer product_id) {
        this.product_id = product_id;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getCurr() {
        return curr;
    }

    public void setCurr(String curr) {
        this.curr = curr;
    }

    @Override
    public String toString() {
        return "Prices{" +
                "id=" + id +
                ", brand_id=" + brand_id +
                ", start_date=" + start_date +
                ", end_date=" + end_date +
                ", price_list=" + price_list +
                ", product_id=" + product_id +
                ", priority=" + priority +
                ", price=" + price +
                ", curr='" + curr + '\'' +
                '}';
    }
}
