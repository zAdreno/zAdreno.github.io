<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/QddtHkkEevUEIEUOobWR.mp4";
$imageLink = "https://img14.tokyvideo.com/videos/272/272405/previews/previews_0012_custom_1686594575.7756.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
