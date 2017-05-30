<?php

    mysql_connect("localhost");
    mysql_select_db("");    //zu ergänzen

$ereignis = $_POST[ereignis];
$jahra = $_POST[jahra];
$jahre = $_POST[jahre];
$standort = $_POST[standort];
$laenge = $_POST[laenge];
$breite = $_POST[breite];
$desc = $_POST[desc];

$insert = mysql_query("INSERT INTO tabelle 
(ereignis, jahra, jahre, standort, laenge, breite, desc)
VALUES
('$ereignis', '$jahra', '$jahre', '$standort', '$laenge', '$breite', '$desc')
or die(mysql_error());

?>