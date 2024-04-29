<?php
$ip = $_SERVER['REMOTE_ADDR'];
echo $ip."\n";
if($ip === '127.0.0.1' || $ip === '::1') echo "FLAG_HERE";
?>