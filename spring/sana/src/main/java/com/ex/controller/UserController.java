package com.ex.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.User;
import com.ex.service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService service;
	
	@RequestMapping(value="/users", method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll(){
		return service.getAll();
	}
	
	@RequestMapping(value="/users/id/{id}", method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public User findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@RequestMapping(value="/users/email/{email}", method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public User findByEmail(@PathVariable String email) {
		return service.findByEmail(email);
	}
	
	@RequestMapping(value="/users", method=RequestMethod.POST,
				consumes=MediaType.APPLICATION_JSON_VALUE, 
				produces=MediaType.APPLICATION_JSON_VALUE)
	public User addNew(@RequestBody User u) {
		return service.add(u);
	}
	
	@RequestMapping(value="/users", method=RequestMethod.PUT, 
				consumes=MediaType.APPLICATION_JSON_VALUE, 
				produces=MediaType.APPLICATION_JSON_VALUE)
	public User update(@RequestBody User u) {
		return service.update(u);
		
	}
	
}
