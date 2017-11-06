<?php
	$uname = $_GET["username"];
	$pwd = $_GET["password"];
	$action = $_GET["action"];
	//连接数据库
	$server = "bdm264887377.my3w.com";
	$username = "bdm264887377";
	$password = "rxx810029";
	$connection = mysql_connect($server,$username,$password);
	if($action == "select"){
		mysql_select_db("bdm264887377_db", $connection);
		$sql = "SELECT username FROM users where username = $uname";
		$result = mysql_query($sql, $connection);
		if($row = mysql_fetch_array($result)) {
			echo '{"status": 1}';
		}
		else{
			echo '{"status": 2}';
		}
		mysql_close($connection);
	}
	$connection = mysql_connect($server,$username,$password);
	if($action == "insert"){
		mysql_select_db("bdm264887377_db", $connection);
		$sql = "INSERT INTO users(username, password) values($uname, $pwd)";
		$result = mysql_query($sql, $connection);
		mysql_close($connection);
	}
	
?>