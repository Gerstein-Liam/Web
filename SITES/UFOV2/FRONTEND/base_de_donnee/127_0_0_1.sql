-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 07 oct. 2020 à 18:33
-- Version du serveur :  10.3.20-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ufo`
--
CREATE DATABASE IF NOT EXISTS `ufo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ufo`;

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `ID_event` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `Latitude` float DEFAULT NULL,
  `Longitude` float DEFAULT NULL,
  `Ressources` varchar(100) DEFAULT NULL,
  `ImplicatedPerson` varchar(100) DEFAULT NULL,
  `RelatedStudies` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_event`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`ID_event`, `Name`, `Date`, `Country`, `Type`, `Latitude`, `Longitude`, `Ressources`, `ImplicatedPerson`, `RelatedStudies`) VALUES
(8, 'Los angeles', '1980-02-25', 'United States', 'Direct', 0, 0, NULL, NULL, NULL),
(7, 'Phoenix', '1997-03-13', 'United States', 'Direct', 0, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `ID_person` int(10) NOT NULL AUTO_INCREMENT,
  `Lastname` varchar(20) DEFAULT NULL,
  `Firstname` varchar(20) DEFAULT NULL,
  `Fonction` varchar(100) DEFAULT NULL,
  `Domain` varchar(20) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `Implication` varchar(20) DEFAULT NULL,
  `Position` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_person`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `person`
--

INSERT INTO `person` (`ID_person`, `Lastname`, `Firstname`, `Fonction`, `Domain`, `Country`, `Implication`, `Position`) VALUES
(225, 'Letty', 'Denis', 'Former air force general', 'Army', 'France', 'Indirect', 'Believer'),
(227, 'Giraud', 'René', 'Former air force pilot', 'Army', 'France', 'Direct', 'Expectant'),
(228, 'Fartek', 'Jean-Pierre', 'Former air force pilot', 'Army', 'France', 'Direct', 'Expectant'),
(230, 'Patenet', 'Jean-Pierre', 'GEIPAN (CNES) Director', 'Civil', 'France', 'Indirect', 'Expectant'),
(231, 'Haigneré', 'Jean-Pierre', 'Spationaute', 'Civil', 'France', 'Indirect', 'Expectant'),
(268, 'Bruneau', 'Jean-Luc', 'General De Gaull science councelor', 'Politic', 'France', 'Indirect', 'Expectant'),
(269, 'Michaud', 'Daniel', 'Civil pilot', 'Civil', 'France', 'Direct', 'Expectant'),
(270, 'Troade', 'Jean-Pierre', 'Army officier', 'Army', 'France', 'Direct', 'Expectant'),
(271, 'Greslé', 'Jean-Gabriel', 'Air force pilot', 'Army', 'France', 'Direct', 'Expectant'),
(286, 'Podest', 'John', 'Former minister', 'Politic', 'United States', 'Indirect', 'Believer'),
(294, 'Symingthon', 'Five', 'Former Arizone Governor', 'Politic', 'United States', 'Direct', 'Believer'),
(301, 'Gerstein', 'Liam', 'Admin', 'Civil', 'France', 'Direct', 'Believer'),
(302, 'lastname', 'firstname', 'fonction', '%', '%', '%', '%'),
(303, 'Dall', 'Piazza', 'Admin', 'Civil', 'United States', 'Direct', 'Believer');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
