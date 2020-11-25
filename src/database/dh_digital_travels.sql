-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: digital_travels
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `excursions`
--

DROP TABLE IF EXISTS `excursions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `excursions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `destination` varchar(100) COLLATE utf8_bin NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excursions`
--

LOCK TABLES `excursions` WRITE;
/*!40000 ALTER TABLE `excursions` DISABLE KEYS */;
INSERT INTO `excursions` VALUES (1,'cerro tronador','rio negro',5000,'Se toma la ruta nacional 258 hasta la bifurcación del camino, surgiendo a la derecha el camino al Tronador. Se orilla el lago Gutiérrez y luego el lago Mascardi con forma de herradura, llamado también lago de los siete colores. Se detiene en Pampa Linda dando tiempo para almorzar. El recorrido culmina un poco más adelante, al pie del Volcán Tronador.',NULL,NULL,NULL),(2,'circuito chico y cerro catedral','rio negro',3500,'Es una de las excursiones más tradicionales y clásicas de nuestra ciudad, comenzamos bordeando el majestuoso lago Nahuel Huapi, por esa misma ruta nos acercamos al km 17 donde se encuentra el cerro Campanario. Una vez finalizado el ascenso y descenso del cerro campanario nos dirigiremos hacia Puerto Pañuelo donde veremos en Gran Hotel Llao Llao y la Capilla San Eduardo.',NULL,NULL,NULL),(3,'el bolson','rio negro',5500,'A 129 Km. al sur de Bariloche por la Ruta Nac. 40, se encuentra la localidad de El Bolsón. La ruta, totalmente asfaltada, bordea los Lagos Gutiérrez, Mascardi y Guillelmo y cruza los ríos Villegas, Foyel y Quemquemtreu para ingresar a la ciudad.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `excursions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `destination` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 DEFAULT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'kenton palace','rio negro',4500,'Los huéspedes de este hotel de 4 estrellas podrán relajarse en el spa, donde hay una sauna, duchas escocesas y gimnasio donde se ofrecen masajes y tratamientos de belleza. Al lado del impresionante vestíbulo hay un bar y el restaurante Araucaria, que sirve platos internacionales y especialidades regionales, como carpaccio de ciervo, trucha y marmita de ciervo.','hotel-kenton-palace.jpg',NULL,NULL),(2,'alma del lago','rio negro',7500,'El Alma Del Lago Suite ofrece un alojamiento moderno con vistas panorámicas al lago Nahuel Huapi. El hotel cuenta con el restaurante Terra que ofrece una carta de cocina mediterráneo-patagónica, además de una colección privada de vinos.','hotel-alma-del-lago.jpg',NULL,NULL),(3,'llao llao hotel & resort golf-spa','rio negro',20600,'\"Este hotel está situado junto al cerro López, los picos del cerro Tronador y los lagos Moreno y Nahuel Huapi. Ofrece un spa y centro de bienestar, un campo de golf de 18 hoyos y piscinas cubiertas y al aire libre. El Llao Llao organiza numerosas actividades al aire libre, como senderismo, ciclismo de montaña y esquí. Asi también propone diversas terapias de bienestar, como hidroterapia, tratamientos de relajación y masajes.','hotel-llao-llao-resort.jpg',NULL,NULL);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfers`
--

DROP TABLE IF EXISTS `transfers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transfers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `destination` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 DEFAULT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfers`
--

LOCK TABLES `transfers` WRITE;
/*!40000 ALTER TABLE `transfers` DISABLE KEYS */;
INSERT INTO `transfers` VALUES (1,'traslado desde Aeropuerto Internacional José María Córdova hacia hotel Kenton Palace','rio negro',1000,'duración: 26 minutos. capacidad máxima: 4 pasajeros.',NULL,NULL,NULL,NULL),(2,'traslado desde Aeropuerto Internacional José María Córdova hacia hotel Alma del Lago','rio negro',1000,'duración: 30 minutos. capacidad máxima: 4 pasajeros.',NULL,NULL,NULL,NULL),(3,'traslado desde Aeropuerto Internacional José María Córdova hacia hotel Llao Llao Hotel & Resort golf','rio negro',2000,'duración: 56 minutos. capacidad máxima: 4 pasajeros.',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `transfers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travel_packages`
--

DROP TABLE IF EXISTS `travel_packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travel_packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `destination` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `total_nights` int(11) NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `hotel_id` int(11) NOT NULL,
  `transfer_id` int(11) NOT NULL,
  `excursion_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_id` (`hotel_id`),
  KEY `transfer_id` (`transfer_id`),
  KEY `excursion_id` (`excursion_id`),
  CONSTRAINT `excursion_id` FOREIGN KEY (`excursion_id`) REFERENCES `excursions` (`id`),
  CONSTRAINT `hotel_id` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`),
  CONSTRAINT `transfer_id` FOREIGN KEY (`transfer_id`) REFERENCES `transfers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travel_packages`
--

LOCK TABLES `travel_packages` WRITE;
/*!40000 ALTER TABLE `travel_packages` DISABLE KEYS */;
INSERT INTO `travel_packages` VALUES (1,'4 noches en BARILOCHE','rio negro',4,'En Bariloche tenés variedad de actividades para disfrutar: excursiones tradicionales, paseos lacustres, nieve para todos los gustos, la mejor gastronomía, turismo joven, salidas románticas, actividades familiares, aventura, tranquilidad',10000,'bariloche-package.jpg',1,3,3,NULL,NULL),(2,'4 noches en BARILOCHE','rio negro',4,'En Bariloche tenés variedad de actividades para disfrutar: excursiones tradicionales, paseos lacustres, nieve para todos los gustos, la mejor gastronomía, turismo joven, salidas románticas, actividades familiares, aventura, tranquilidad y u',15700,'bariloche-package.jpg',1,1,3,NULL,NULL),(3,'6 noches en BARILOCHE','rio negro',6,'En Bariloche tenés variedad de actividades para disfrutar: excursiones tradicionales, paseos lacustres, nieve para todos los gustos, la mejor gastronomía, turismo joven, salidas románticas, actividades familiares, aventura, tranquilidad y una agenda cultural diversa. La ciudad te ofrece tantas opciones que vas a querer visitarnos una y otra vez.',30500,'bariloche-package.jpg',3,3,3,NULL,NULL),(4,'3 noches en BARILOCHE','rio negro',3,'En Bariloche tenés variedad de actividades para disfrutar: excursiones tradicionales, paseos lacustres, nieve para todos los gustos, la mejor gastronomía, turismo joven, salidas románticas, actividades familiares, aventura, tranquilidad y una agenda cultural diversa. La ciudad te ofrece tantas opciones que vas a querer visitarnos una y otra vez.',14300,'bariloche-package.jpg',2,2,1,NULL,NULL);
/*!40000 ALTER TABLE `travel_packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `password` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucas','Carino','lucascarino','lucascarino2@gmail.com','$2a$10$NpF62LRWmlJy/yKp4vHKFeSZwfAX/QOhtXO1hdDLgrvi8eT1YmUPu'),(2,'Homero','Simpson','homersimpson','homer@homer.com','$2a$10$jogemFOjppg558xK.Hzh0.IZmM4HZB7oc/CAAsoY./KuyTfMJ65ja'),(3,'Santiago','Perone','santiperone','sdperone97@gmail.com','$2a$10$d.x8/Rv.FWL7m.EcZxuHe.qmLXkm0xz6W6VjtGPF88Q.kTA9gpbEu'),(4,'Santiago','Aranda','sanarana','santiagoaranda@gmail.com','$2a$10$a8GZpY4q5SU6J4cKw7Vp6O/6Wu9sDo5ZfjSDy3ugtqv54KSHgUDCu'),(5,'Santiago','Aranda','sanarana','santiagoaranda@gmail.com','$2a$10$a8GZpY4q5SU6J4cKw7Vp6O/6Wu9sDo5ZfjSDy3ugtqv54KSHgUDCu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-25 17:23:49
