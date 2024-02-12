<?php

// Установка соединения с базой данных
$mysqli = new mysqli("localhost", "l92279xw_info", "123Qwerty123", "l92279xw_info"); 

// Проверка соединения
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Получение данных из формы
$name = $_POST['name'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Выполнение операции с базой данных
$query = "INSERT INTO Profile (name, lastName, phone, email) VALUES ('$name', '$lastName', '$phone', '$email')";

if ($mysqli->query($query) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $query . "<br>" . $mysqli->error;
}

// Закрытие соединения с базой данных
$mysqli->close();
?>
