-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shake Weight',2999,'/images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(2,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(3,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(4,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(5,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(6,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(7,'Shake Weight',2999,'/images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(8,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(9,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(10,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(11,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(12,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(13,'Shake Weight',2999,'/images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(14,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(15,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(16,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(17,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.'),(18,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna ac. Euismod in pellentesque massa placerat duis ultricies lacus sed.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-18 23:15:36
