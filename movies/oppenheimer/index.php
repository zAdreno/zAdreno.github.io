<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/rjOVXpqomGzpUoGAKTFz.mp4";
$imageLink = "https://goldendiscs.ie/cdn/shop/collections/Header_Oppenheimer_2for25_460x@2x.png?v=1697618018";

$document = makePage($videoLink, $imageLink);

echo($document);
