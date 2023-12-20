<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/QscxljICKfltdWKlJHmP.mp4";
$imageLink = "https://lascronicasdeaxa.files.wordpress.com/2019/04/shazam_2019_banner.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
