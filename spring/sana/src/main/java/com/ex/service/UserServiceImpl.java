package com.ex.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.User;
import com.ex.repository.UserRepo;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo urepo;
	
	@Override
	public List<User> getAll() {
		return urepo.findAll();
	}

	@Override
	public User findById(int id) {
		return urepo.findOne(id);
	}

	@Override
	public User findByEmail(String email) {
		return urepo.findByEmail(email);
	}

	@Override
	public User add(User u) {
		if (urepo.findByEmail(u.getEmail()) != null) {
			return null;
		} 
		return urepo.save(u);
	}

	@Override
	public User update(User u) {
		User oldUser = findById(u.getId());
		if(oldUser == null) return null;
		else oldUser = u;
		return u;
	}
	
	
	

}
