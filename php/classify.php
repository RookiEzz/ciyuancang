<?php
//连接数据库
$server = "bdm264887377.my3w.com";
$username = "bdm264887377";
$password = "rxx810029";
$connection = mysql_connect($server,$username,$password);
mysql_select_db("bdm264887377_db", $connection);
mysql_query("set character set utf8", $connection);
$sql = "SELECT * FROM tb_product limit 10";
$result = mysql_query($sql, $connection);
$len = mysql_num_rows($result);
$row = array();
for($i = 0; $i < $len; $i++){
	array_push($row, mysql_fetch_array($result, MYSQL_ASSOC));
}
echo json_encode($row);
mysql_close($connection);
?>