package com.ex.controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class SendEmailController {
	
	static {
		System.out.println("In Email Controller");
	}
	@Autowired
	private JavaMailSender mailSender;
	
	@RequestMapping(method = RequestMethod.GET)
	public String doSendEmail()
	{
		System.out.println("Hello");
		return "Result";
		/*
		User u = new User("orinkp@yahoo.com", "Hello_world");
		
		mailSender.send(new MimeMessagePreparator() {
			public void prepare(MimeMessage mimeMessage) throws MessagingException{
				MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
				message.setFrom("noreply@sana.com");
				message.setTo(u.getEmail());
				message.setSubject("A file for you");;
				message.setText("<b>I lied </b>", true);
			}
		});
		return "Result";
		*/
	}
}
