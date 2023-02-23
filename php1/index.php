<?php

// Set header to allow cross-domain requests
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Define database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "soa";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Define SQL query to retrieve all users
$sql = "SELECT id, name, email, username FROM users";
$result = $conn->query($sql);

// Check if any results were returned
if ($result->num_rows > 0) {

    // Create an empty array to store the user data
    $users = array();

    // Loop through each row of the result and add the user data to the array
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }

    // Return the user data in JSON format
    echo json_encode($users);

} else {
    // If no results were returned, return an empty array
    echo json_encode(array());
}

// Close the database connection
$conn->close();