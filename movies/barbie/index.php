<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/quvXQndHERqKfyxzoYhu.mp4";
$imageLink = "https://big.fileditchnew.ch/b3/quvXQndHERqKfyxzoYhu.mp4";

$document = makePage($videoLink, $imageLink);

echo($document);
