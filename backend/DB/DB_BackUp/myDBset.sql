-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230205153740-Testing.js'),('20230206133143-Second.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Testing`
--

DROP TABLE IF EXISTS `Testing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Testing` (
  `id` int NOT NULL,
  `pw` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Testing`
--

LOCK TABLES `Testing` WRITE;
/*!40000 ALTER TABLE `Testing` DISABLE KEYS */;
INSERT INTO `Testing` VALUES (1,'Hello world!'),(404,'NOT ERROR'),(502,'Server Error');
/*!40000 ALTER TABLE `Testing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Testings`
--

DROP TABLE IF EXISTS `Testings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Testings` (
  `id` int NOT NULL,
  `pw` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Testings`
--

LOCK TABLES `Testings` WRITE;
/*!40000 ALTER TABLE `Testings` DISABLE KEYS */;
/*!40000 ALTER TABLE `Testings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `codenum` varchar(54) NOT NULL,
  `commenter` varchar(40) NOT NULL,
  `time` datetime NOT NULL,
  `contents` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `num` int NOT NULL AUTO_INCREMENT,
  `writer` varchar(40) NOT NULL,
  `title` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `codenum` varchar(54) NOT NULL,
  `contents` varchar(800) DEFAULT NULL,
  PRIMARY KEY (`num`),
  UNIQUE KEY `codenum` (`codenum`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'tester','Hello','2023-01-30 21:02:11','Hello','Hello world! - tester'),(4,'tester','Hi my name is tester','2023-01-30 22:03:51','tester2023-1-30 22:3:51','Hello World!'),(5,'tester','Hi my name is tester','2023-01-30 22:04:36','tester2023-1-30 22:4:36','Hello World!'),(6,'tester','Hi my name is tester','2023-01-30 22:12:49','tester2023-1-30 22:12:49','Hello World!'),(7,'tester','Hi my name is tester','2023-01-30 22:21:05','tester2023-1-30 22:21:5','Hello World!'),(8,'tester','Hi There!','2023-01-31 06:20:29','tester2023-1-31 6:20:29','Im Steve!'),(9,'tester','Good job!','2023-01-31 06:21:12','tester2023-1-31 6:21:12','You are special!'),(10,'tester','Good job!','2023-01-31 06:22:13','tester2023-1-31 6:22:13','You are special!'),(11,'tester','Good job!','2023-01-31 06:22:57','tester2023-1-31 6:22:57','You are special!'),(12,'tester','','2023-01-31 06:23:05','tester2023-1-31 6:23:5',''),(13,'tester','Hello! Stranger!','2023-01-31 06:32:24','tester2023-1-31 6:32:24','This is my testing parse'),(14,'tester','\"Hello\"','2023-01-31 06:40:10','tester2023-1-31 6:40:10','Hello!'),(15,'tester','\"Hello\" //','2023-01-31 06:41:03','tester2023-1-31 6:41:3','Hello!'),(16,'tester','\"Hello','2023-01-31 06:41:36','tester2023-1-31 6:41:36','Hello!'),(17,'tester','\'Hello','2023-01-31 06:44:56','tester2023-1-31 6:44:56','ddddd'),(18,'tester','Hello World!','2023-01-31 07:00:22','tester2023-1-31 7:0:22','Hey');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_nickname` varchar(40) NOT NULL,
  `salt_key` varchar(100) NOT NULL,
  `Email` varchar(30) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_nickname` (`user_nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('DOGGO','Hello world!','DeangTheDog','234edkgawh','Hello@World!'),('Hello World','ckryAR00G/Mv2Pmfq0RrKisR/eIWqdUX1j2iW44JhFeX4Tp5my9UlH+FTajZM9i36BG80BYIhn/YfjvlodwEyQ==','sheep','8gtByF2aM1kRJG0Ix5afyo14EMvB14f87j12TZNbz0kKFaini7BAYf8ncRRzO/aBl7Bt1TjJHie/I9Fh','dlawlgud4@naver.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06  7:19:35
