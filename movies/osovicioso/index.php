<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/xXTqaDXZHZyNcymIxgkb.mp4";
$imageLink = "https://culturamania.com/wp-content/uploads/2023/03/tt14209916.webp";

$document = makePage($videoLink, $imageLink);

echo($document);
