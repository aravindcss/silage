-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 21, 2021 at 06:30 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `avanniorganics`
--

-- --------------------------------------------------------

--
-- Table structure for table `add-cart`
--

CREATE TABLE `add-cart` (
  `cust_id` varchar(200) NOT NULL,
  `product_id` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `add-cart`
--

INSERT INTO `add-cart` (`cust_id`, `product_id`) VALUES
('15', '7'),
('15', '10'),
('15', '10'),
('15', '10'),
('11', '4');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`) VALUES
(1, 'Avanni Organics', 'ao@conzura', 'ao@conzura');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cust_id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `email`, `mobile`, `password`) VALUES
(11, 'surendrastar548@gmail.com', '6300083937', 'Suri@123'),
(12, 'kingsurendra614@gmail.com', '6300083937', 'Suri@123'),
(14, 'a@gmail.com', '6300083937', 'Suri@123'),
(15, 'suri@gmail.com', '6300083937', 'Suri@1234');

-- --------------------------------------------------------

--
-- Table structure for table `cust_info`
--

CREATE TABLE `cust_info` (
  `cust_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `door_number` varchar(255) NOT NULL,
  `village` varchar(255) NOT NULL,
  `landmark` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `pincode` varchar(6) NOT NULL,
  `Product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cust_info`
--

INSERT INTO `cust_info` (`cust_id`, `name`, `phone_number`, `door_number`, `village`, `landmark`, `city`, `pincode`, `Product_id`) VALUES
(15, 'Surendra', '6300083937', '1/123', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 6),
(11, 'Surendra', '6300083937', '1/123', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 4),
(11, 'Surendra', '6300083937', '1/123', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 5),
(11, 'Surendra', '6300083937', '1/123', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 5),
(11, 'Surendra', '6300083937', '1-834', 'moolasagaram', 'moolasagaram', 'Kurnool', '518123', 1),
(11, 'Surendra', '6300083937', '1-834', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 7),
(11, 'Surendra', '6300083937', '1/123', 'Kalavatala', 'Kalavatala', 'Kurnool', '518123', 4),
(14, 'Surendra', '6300083937', '1-81', 'main road', 'kalavatala', 'Kurnool', '518123', 7),
(14, 'Surendra', '6300083937', '1-81', 'main road', 'kalavatala', 'Kurnool', '518123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`name`, `email`, `state`, `country`, `comments`) VALUES
('surendra', 'surendrastar548@gmail.com', 'Andhra Pradesh', 'india', 'Good one'),
('Nagesh', 'a@gmail.com', 'Andhra Pradesh', 'india', 'Great website where i get my required milletes'),
('Surendra', 'surendrastar548@gmail.com', 'Andhra Pradesh', 'india', 'Great website'),
('surendra', 'kingsurendra614@gmail.com', 'Andhra Pradesh', 'india', 'Veery good');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `cust_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(255) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `total_amount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`cust_id`, `product_id`, `order_date`, `status`, `qty`, `total_amount`) VALUES
(11, 7, '2021-05-07 18:18:52', 'Ordered', 19, '1881'),
(14, 7, '2021-05-07 18:36:15', 'Ordered', 2, '198');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Name`, `Description`, `Image`, `Price`) VALUES
(1, 'millets', 'are a group of highly variable small-seeded grasses', '3.jpg', '1999.00'),
(4, 'oil', 'Helps prevent cancer', '2.jpg', '999.00'),
(5, 'green millets', 'millet uses as a cereal, in soups, and for making a dense, whole grain bread called chapatti.', '3.jpg', '999.00'),
(6, 'are a group of highly variable', 'are a group of highly variable', '3.jpg', '1939.00'),
(7, 'Finger millet', 'are a group of highly variable small-seeded grasses, widely grown around the world as cereal crops or grains for fodder and human food.', 'fingermillet.jpg', '99.00'),
(10, 'kodo millet', 'are a group of highly variable small-seeded grasses, widely grown around the world as cereal crops or grains for fodder and human food.', 'Millet-item-420.jpg', '99.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;