CREATE DATABASE cancer_patient_support;
USE cancer_patient_support;

-- Volunteers table
CREATE TABLE volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(100),                         
  role_description TEXT,                     
  name VARCHAR(100) NOT NULL,
  age INT CHECK (age >= 18 AND age <= 100),
  email VARCHAR(150) NOT NULL UNIQUE,
  gender ENUM('male','female','other'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Donations table 
CREATE TABLE donations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    donor_name VARCHAR(150) NOT NULL,
    donor_email VARCHAR(150) NOT NULL,
    donation_amount DECIMAL(10,2) NOT NULL 
        CHECK (donation_amount >= 1 AND donation_amount <= 150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Contact messages table
CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from volunteers;
select * from contact_messages;
select * from donations;