package com.fcsilva.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcsilva.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}

