<?php
header("Content-type: text/plain; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

echo "Метод передачи данных: ".$_SERVER['REQUEST_METHOD'];
echo "<br/>Получили по AJAX  следующие данные:";
echo "<pre>";
print_r($_POST);
echo "</pre>";
?>