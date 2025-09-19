CREATE DATABASE cancer_patient_support;
USE cancer_patient_support;

CREATE TABLE volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(100),
  name VARCHAR(100) NOT NULL,
  age INT CHECK (age >= 18 AND age <= 100),
  email VARCHAR(150) NOT NULL UNIQUE,
  gender ENUM('male','female','other'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- CREATE TABLE donations (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   amount DECIMAL(10,2) NOT NULL,
--   payment_id VARCHAR(255),          -- Instamojo payment_id (filled after success)
--   order_id VARCHAR(255),            -- Instamojo payment_request_id
--   status ENUM('PENDING','SUCCESS','FAILED') DEFAULT 'PENDING',
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
