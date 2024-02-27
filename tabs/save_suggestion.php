<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $suggestion = $_POST["suggestion"];

    // Format the data
    $data = "Name: $name\nEmail: $email\nSuggestion: $suggestion\n\n";

    // Save data to a text file
    $file = fopen("suggestions.txt", "a"); // "a" mode for append
    fwrite($file, $data);
    fclose($file);

    echo "Suggestion saved successfully.";
} else {
    echo "Method not allowed.";
}
?>
