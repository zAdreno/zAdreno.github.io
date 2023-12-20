<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/WNjAVngwRnPLTNaafWHz.mp4";
$imageLink = "https://comicsen8mm.com/wp-content/uploads/2015/10/The-Flash-Banner-03.png";

$document = makePage($videoLink, $imageLink);

echo($document);
