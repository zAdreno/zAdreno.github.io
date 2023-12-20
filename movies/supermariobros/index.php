<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/zUuMDFSKHxLOZrZTOGhi.mp4";
$imageLink = "https://lavibrante.com/wp-content/uploads/2023/04/Super-Mario-bros-822x462.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
