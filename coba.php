<?php
	$server = "localhost";
	$user = "root";
	$pass = "1234Abcd";
	$dtbs = "movie";
	
	$hubung = new mysqli($server,$user,$pass,$dtbs);
	$hubungp = new mysqli($server,$user,$pass,$dtbs);
	
	if(mysqli_connect_errno()){
		echo "Gagal Koneksi Databse";
	}
	else{
		// echo "Sukses";
        if($hasil = $hubung->query("SELECT * FROM ((movie_casts INNER JOIN movies ON movies.id=movie_casts.movie_id) INNER JOIN casts ON casts.id=movie_casts.cast_id);")){
            echo "Returned ". $hasil->num_rows;
            $hasil->free_result();
        }
	}
?>