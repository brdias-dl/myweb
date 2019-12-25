<?php
$myFile = "aulas.json";
$fh = fopen($myFile, 'w');
$stringData = $_GET["data"];
echo $fh;
fwrite($fh, $stringData);
fclose($fh);
?>