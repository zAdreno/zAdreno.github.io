<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/PvzqgrFFhYzsBFyNooAA.mp4";
$imageLink = "https://img.aullidos.com/imagenes/noticias/tw-38617.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
