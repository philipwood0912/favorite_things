-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 08, 2019 at 02:25 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favorite`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_things`
--

CREATE TABLE `tbl_things` (
  `ID` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `TitleImg` varchar(20) NOT NULL,
  `ItemImg` varchar(50) NOT NULL,
  `Items` varchar(50) NOT NULL,
  `Info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_things`
--

INSERT INTO `tbl_things` (`ID`, `Title`, `TitleImg`, `ItemImg`, `Items`, `Info`) VALUES
(1, 'COMPUTERS', 'computer', 'pc.png, mac.png', 'PC, Mac, Exit', 'I\'ve always loved computers since a young age. I got my very first PC when I was 11 years old, and I thought I would never like anything else. That was until I got my Mac computer. It can\'t play video games as well as my PC but it preforms beautifully when it comes to coding.'),
(2, 'CAFFEINE', 'caffeine', 'coffee.png, bull.png', 'Coffee, Red Bull, Exit', 'Caffeine has been a major part of my life. From getting a coffee every morning before class, or having a Red Bull before work on only 3 hours of sleep, caffeine has always been there to save the day.'),
(3, 'GAMES', 'dice', 'dnd.png, catan.png', 'DnD, Catan, Exit', 'I started playing Dungeons and Dragons about 2 years ago, it\'s basically an RPG based on your imagination, and is a ton of fun to play. But I also enjoy more competitive games, such as Catan, where backstabbing and betrayals can bring you closer to victory. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_things`
--
ALTER TABLE `tbl_things`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_things`
--
ALTER TABLE `tbl_things`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
