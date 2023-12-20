<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/CbycQLimoPFqAYcfRvud.mp4";
$imageLink = "https://cartelescine.files.wordpress.com/2023/05/creayorbanner.jpg?w=1200";

$document = makePage($videoLink, $imageLink);

echo($document);
