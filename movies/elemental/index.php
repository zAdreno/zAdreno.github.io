<?php
include './gen.php';

$videoLink = "https://big.fileditchnew.ch/b3/XVXcpFOdpFuXybaXCpe.mp4";
$imageLink = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnuestrotiempo.unav.edu%2Fes%2Fcultura%2Fcine%2Felemental-critica&psig=AOvVaw3lt4Qt61oEYgbjPn-imQgj&ust=1701653926441000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDbuoGR8oIDFQAAAAAdAAAAABAE";

$document = makePage($videoLink, $imageLink);

echo($document);
