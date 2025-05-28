<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require 'db.php';
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name ?? '';
    $email = $data->email ?? '';
    $message = $data->message ?? '';

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Missing fields"]);
        exit();
    }

    $stmt = $pdo->prepare("INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)");
    if ($stmt->execute([$name, $email, $message])) {
        echo json_encode(["success" => true, "message" => "Submitted!"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
}
?>