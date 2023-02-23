<?php

// Include the SendGrid library
require 'vendor/autoload.php';
use SendGrid\Mail\Mail;

// Set the API key and create a new SendGrid client
$apiKey = '';
$sg = new \SendGrid($apiKey);

// Create a new email object
$email = new Mail();

// Set the email parameters
$email->setFrom('myFirstEmail@gmail.com', 'Coman Patricia');
$email->addTo('mySecondEmail@yahoo.com', 'Recipient Name');
$email->setSubject('SOA project');
$email->addContent(
    'text/plain', 'This is a test email sent from SendGrid'
);

// Send the email
$response = $sg->send($email);
