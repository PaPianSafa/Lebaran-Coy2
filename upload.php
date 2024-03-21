<?php
$text = $_POST["text"];
$file = $_FILES["file"]["name"];

$fileContent = $text . "\n";

file_put_contents("uploaded_words.txt", $fileContent, FILE_APPEND);

echo $text;
?>
