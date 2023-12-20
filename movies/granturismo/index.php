<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/XsDzQpxhOoCQNXOrEUDS.mp4";
$imageLink = "https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
