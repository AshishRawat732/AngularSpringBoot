package com.ashish.ecommerce.dao;

import com.ashish.ecommerce.entity.Country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
// import org.springframework.web.bind.annotation.CrossOrigin;

// @CrossOrigin("http://localhost:4200") - we have added crossOrigin in MyDataRestConfig. That's why we have removed from All Repos.
@RepositoryRestResource(collectionResourceRel = "countries", path = "countries")
public interface CountryRepository extends JpaRepository<Country, Integer> {
}
