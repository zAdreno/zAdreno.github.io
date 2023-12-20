<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/TLmhRlrlaCffujIeDMxr.mp4";
$imageLink = "https://thegatorseye.com/wp-content/uploads/2023/01/01-m3g-dm-mobile-banner-1080x745-km-f01-100522-63459d5425478-1.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
