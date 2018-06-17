package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="insurance")
public class Insurance {
	
	@Id
	@Column(name="insurance_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="insurance")
	@SequenceGenerator(name="insurance", sequenceName="insur_seq", allocationSize=1)
	private int insurance_id;
	
	@Column(name="area_city")
	private int area_city;
	
	@Column(name="area_suburban")
	private int area_suburban;
	
	@Column(name="area_rural")
	private int area_rural;
	
	@Column(name="gender_male")
	private int gender_male;
	
	@Column(name="gender_female")
	private int gender_female;
	
	@Column(name="smoker")
	private int smoker;
	
	@Column(name="diabetic")
	private int diabetic;
	
	@Column(name="hbp")
	private int hbp;
	
	@Column(name="previous_surgery")
	private int surgery;
	
	@Column(name="allergy")
	private int allergy;
	
	@Column(name="spouse")
	private int spouse;
	
	@Column(name="per_child")
	private int per_child;
	
	@Column(name="age_0_17")
	private int age_0_17;
	
	@Column(name="age_18_20")
	private int age_18_20;
	
	@Column(name="age_21_40")
	private int age_21_40;
	
	@Column(name="age_40_plus")
	private int age_40_plus;
	
	@Column(name="multiplier_bonus_long_term")
	private double long_term;
	
	@Column(name="multiplier_bonus_short_term")
	private double short_term;
	
	@Column(name="platinum")
	private double platinum;
	
	@Column(name="gold")
	private double gold;
	
	@Column(name="medi")
	private double medicare;

	public Insurance() {super();}

	public Insurance(int area_city, int area_suburban, int area_rural, int gender_male, int gender_female, int smoker,
			int diabetic, int hbp, int surgery, int allergy, int spouse, int per_child, int age_0_17, int age_18_20,
			int age_21_40, int age_40_plus, double long_term, double short_term, double platinum, double gold,
			double medicare) {
		super();
		this.area_city = area_city;
		this.area_suburban = area_suburban;
		this.area_rural = area_rural;
		this.gender_male = gender_male;
		this.gender_female = gender_female;
		this.smoker = smoker;
		this.diabetic = diabetic;
		this.hbp = hbp;
		this.surgery = surgery;
		this.allergy = allergy;
		this.spouse = spouse;
		this.per_child = per_child;
		this.age_0_17 = age_0_17;
		this.age_18_20 = age_18_20;
		this.age_21_40 = age_21_40;
		this.age_40_plus = age_40_plus;
		this.long_term = long_term;
		this.short_term = short_term;
		this.platinum = platinum;
		this.gold = gold;
		this.medicare = medicare;
	}

	public int getArea_city() {
		return area_city;
	}

	public void setArea_city(int area_city) {
		this.area_city = area_city;
	}

	public int getArea_suburban() {
		return area_suburban;
	}

	public void setArea_suburban(int area_suburban) {
		this.area_suburban = area_suburban;
	}

	public int getArea_rural() {
		return area_rural;
	}

	public void setArea_rural(int area_rural) {
		this.area_rural = area_rural;
	}

	public int getGender_male() {
		return gender_male;
	}

	public void setGender_male(int gender_male) {
		this.gender_male = gender_male;
	}

	public int getGender_female() {
		return gender_female;
	}

	public void setGender_female(int gender_female) {
		this.gender_female = gender_female;
	}

	public int getSmoker() {
		return smoker;
	}

	public void setSmoker(int smoker) {
		this.smoker = smoker;
	}

	public int getDiabetic() {
		return diabetic;
	}

	public void setDiabetic(int diabetic) {
		this.diabetic = diabetic;
	}

	public int getHbp() {
		return hbp;
	}

	public void setHbp(int hbp) {
		this.hbp = hbp;
	}

	public int getSurgery() {
		return surgery;
	}

	public void setSurgery(int surgery) {
		this.surgery = surgery;
	}

	public int getAllergy() {
		return allergy;
	}

	public void setAllergy(int allergy) {
		this.allergy = allergy;
	}

	public int getSpouse() {
		return spouse;
	}

	public void setSpouse(int spouse) {
		this.spouse = spouse;
	}

	public int getPer_child() {
		return per_child;
	}

	public void setPer_child(int per_child) {
		this.per_child = per_child;
	}

	public int getAge_0_17() {
		return age_0_17;
	}

	public void setAge_0_17(int age_0_17) {
		this.age_0_17 = age_0_17;
	}

	public int getAge_18_20() {
		return age_18_20;
	}

	public void setAge_18_20(int age_18_20) {
		this.age_18_20 = age_18_20;
	}

	public int getAge_21_40() {
		return age_21_40;
	}

	public void setAge_21_40(int age_21_40) {
		this.age_21_40 = age_21_40;
	}

	public int getAge_40_plus() {
		return age_40_plus;
	}

	public void setAge_40_plus(int age_40_plus) {
		this.age_40_plus = age_40_plus;
	}

	public double getLong_term() {
		return long_term;
	}

	public void setLong_term(double long_term) {
		this.long_term = long_term;
	}

	public double getShort_term() {
		return short_term;
	}

	public void setShort_term(double short_term) {
		this.short_term = short_term;
	}

	public double getPlatinum() {
		return platinum;
	}

	public void setPlatinum(double platinum) {
		this.platinum = platinum;
	}

	public double getGold() {
		return gold;
	}

	public void setGold(double gold) {
		this.gold = gold;
	}

	public double getMedicare() {
		return medicare;
	}

	public void setMedicare(double medicare) {
		this.medicare = medicare;
	}
	
	
	
	
	
	
}
