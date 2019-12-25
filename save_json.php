<?php
$myFile = "aulas.json";
$fh = fopen($myFile, 'w');
$stringData = $_GET["data"];
echo $stringData;
fwrite($fh, $stringData);
fclose($fh)
?>