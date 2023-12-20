<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/ZrCuyZuCXSZINsjebbeN.mp4";
$imageLink = "https://www.underscores.fr/wp-content/uploads/2010/06/Avatar-Banner-1.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
