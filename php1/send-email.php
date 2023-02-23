<?php

// Include the SendGrid library
require 'vendor/autoload.php';
use SendGrid\Mail\Mail;

// Set the API key and create a new SendGrid client
$apiKey = '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';
$sg = new \SendGrid($apiKey);

// Create a new email object
$email = new Mail();

// Set the email parameters
$email->setFrom('comanpatricia27@gmail.com', 'Coman Patricia');
$email->addTo('coman_patricia98@yahoo.com', 'Recipient Name');
$email->setSubject('SOA project');
$email->addContent(
    'text/plain', 'This is a test email sent from SendGrid'
);

// Send the email
$response = $sg->send($email);
//      coman_patricia98@yahoo.com
