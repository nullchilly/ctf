<?php
    function checksig($filename, $timestamp, $sig, $secretkey)
    {
        $realsig = substr(md5($filename.$timestamp.$secretkey),0,16);
        if ($sig == $realsig) {
            $filename = './'.str_replace('/','',$filename);        
            return readfile($filename);
        } else {
            return "Invalid Signature!";
        }
        
        
    }

$secretkey = "XXXXXXXXXXXXXXXX"; // Secret Key has been changed
echo "<html>
    <title>Read File</title>
    <body>
    <br>Dare to read flag.php???<br>
    <a href='index.php?filename=test.php&timestamp=13371337&sig=aef27ab0e6c8bafb'>Click me</a><br>
    ";
    if (isset($_GET['filename'])&&isset($_GET['sig'])&&isset($_GET['timestamp'])) {
            echo "<pre>";
            echo checksig($_GET['filename'],$_GET['timestamp'],$_GET['sig'], $secretkey);
            echo "</pre>";        
    } else {
        echo "Something's missing!!<br>";
    }
echo "</body></html>";
?>
