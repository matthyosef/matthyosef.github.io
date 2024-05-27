-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.35 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table tstdbv4.tstaccount
CREATE TABLE IF NOT EXISTS `tstaccount` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `AddressId` bigint(20) NOT NULL,
  `Username` text NOT NULL,
  `EncryptionMethod` text COMMENT 'AES',
  `HashingKey` text COMMENT 'AES Hash',
  `Password` text NOT NULL,
  `BPN` varchar(20) DEFAULT NULL,
  `TIN` varchar(20) DEFAULT NULL,
  `AccountType` text DEFAULT NULL,
  `TimeRegion` text COMMENT 'Pretoria, South Africa',
  `IsCreatedOn` datetime DEFAULT NULL,
  `IsUpdatedOn` datetime DEFAULT NULL,
  `IsSuspended` tinyint(4) DEFAULT '0',
  `IsSuspendedOn` datetime DEFAULT NULL,
  `SuspensionEndsOn` datetime DEFAULT NULL,
  `IsActive` tinyint(4) DEFAULT '1',
  `IsActiveOn` datetime DEFAULT NULL,
  `IsPrivate` tinyint(4) DEFAULT '0',
  `IsDeleted` tinyint(4) DEFAULT '0',
  `IsDeletedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstaccountconnections
CREATE TABLE IF NOT EXISTS `tstaccountconnections` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `FriendId` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstaccountinterests
CREATE TABLE IF NOT EXISTS `tstaccountinterests` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) DEFAULT NULL,
  `ProductId` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstactivitylog
CREATE TABLE IF NOT EXISTS `tstactivitylog` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `LinkVisited` longtext NOT NULL,
  `DeviceDetails` text DEFAULT NULL,
  `BrowserDetails` text DEFAULT NULL,
  `Ipv4Address` varchar(16) DEFAULT NULL,
  `Ipv6Address` varchar(32) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstactors
CREATE TABLE IF NOT EXISTS `tstactors` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MovieId` bigint(20) NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Nationality` text DEFAULT NULL,
  `RoleDescription` text DEFAULT NULL,
  `LinkURL` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstaddress
CREATE TABLE IF NOT EXISTS `tstaddress` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CountryId` bigint(20) DEFAULT NULL,
  `StateProvinceId` bigint(20) DEFAULT NULL,
  `Firstname` text DEFAULT NULL,
  `Lastname` text DEFAULT NULL,
  `Email` text DEFAULT NULL,
  `Company` text DEFAULT NULL,
  `StateOrProvince` text DEFAULT NULL,
  `City` text DEFAULT NULL,
  `Address1` longtext DEFAULT NULL,
  `Address2` longtext DEFAULT NULL,
  `ZipPostalCode` text DEFAULT NULL,
  `PhoneNumber` text DEFAULT NULL,
  `FaxNumber` text DEFAULT NULL,
  `CustomAttributes` longtext DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstaffiliates
CREATE TABLE IF NOT EXISTS `tstaffiliates` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `AffiliateAddressId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Commission` decimal(18,4) DEFAULT '0.0000',
  `DateJoined` date DEFAULT NULL,
  `AdminComment` longtext DEFAULT NULL,
  `FriendlyURLName` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstalbums
CREATE TABLE IF NOT EXISTS `tstalbums` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ArtistId` bigint(20) NOT NULL,
  `AlbumName` text,
  `ReleasedDate` date DEFAULT NULL,
  `GenreId` bigint(20) DEFAULT NULL,
  `PictureId` bigint(20) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstalert
CREATE TABLE IF NOT EXISTS `tstalert` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `AlertMessage` longtext DEFAULT NULL,
  `TimeSent` datetime DEFAULT NULL,
  `AlertPriority` tinyint(1) DEFAULT NULL,
  `WarningType` text DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstalertrule
CREATE TABLE IF NOT EXISTS `tstalertrule` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Keyword` text,
  `Category` text,
  `AlertPriority` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstapierrors
CREATE TABLE IF NOT EXISTS `tstapierrors` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Message` longtext NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstapplications
CREATE TABLE IF NOT EXISTS `tstapplications` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `AppName` text NOT NULL,
  `AppDescription` text DEFAULT NULL,
  `ReleasedDate` date DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstarchive
CREATE TABLE IF NOT EXISTS `tstarchive` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `LinkURL` longtext NOT NULL,
  `Category` text,
  `CreatedOn` datetime DEFAULT NULL,
  `DateModified` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstartists
CREATE TABLE IF NOT EXISTS `tstartists` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ArtistName` text NOT NULL,
  `Description` longtext DEFAULT NULL,
  `TypeOfArt` text DEFAULT NULL,
  `Category` text DEFAULT NULL,
  `NumberOfCollections` int(11) DEFAULT NULL,
  `DateJoined` date DEFAULT NULL,
  `YearsActive` int(11) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstartworks
CREATE TABLE IF NOT EXISTS `tstartworks` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `ArtistName` text NOT NULL,
  `DateCreated` date DEFAULT NULL,
  `MediumType` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `PictureId` bigint(20) DEFAULT NULL,
  `BiddingPrice` decimal(18,4) DEFAULT NULL,
  `BiddingMessage` longtext DEFAULT NULL,
  `BiddingEndDate` datetime DEFAULT NULL,
  `WinnerId` bigint(20) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstartworksoffers
CREATE TABLE IF NOT EXISTS `tstartworksoffers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `BidderId` bigint(20) NOT NULL,
  `ArtworkId` bigint(20) NOT NULL,
  `OfferPrice` decimal(18,4) DEFAULT NULL,
  `OfferMessage` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstassignments
CREATE TABLE IF NOT EXISTS `tstassignments` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CourseId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `AssignTo` bigint(20) DEFAULT NULL,
  `DateDue` datetime DEFAULT NULL,
  `DateCutoff` datetime DEFAULT NULL,
  `MultiSubmit` tinyint(4) DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstassignmentsanswers
CREATE TABLE IF NOT EXISTS `tstassignmentsanswers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `AssignmentId` bigint(20) NOT NULL,
  `LearnerId` bigint(20) NOT NULL,
  `AnswerText` longtext DEFAULT NULL,
  `SubmissionDate` datetime DEFAULT NULL,
  `MarksGotten` int(11) DEFAULT NULL,
  `PrivateMessage` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstassignmentsquestions
CREATE TABLE IF NOT EXISTS `tstassignmentsquestions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `AssignmentId` bigint(20) DEFAULT NULL,
  `QuestionText` longtext DEFAULT NULL,
  `MarksAwarded` int(11) DEFAULT NULL,
  `TopicSection` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstaudio
CREATE TABLE IF NOT EXISTS `tstaudio` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Status` int(2) NOT NULL,
  `Encoder` char(16) NOT NULL,
  `Path` longtext NOT NULL,
  `FileName` char(64) NOT NULL,
  `Extension` char(8) NOT NULL,
  `Format` char(32) NOT NULL,
  `Duration` char(10) NOT NULL,
  `Size` char(10) NOT NULL,
  `Bitrate` char(6) NOT NULL,
  `AudioCodec` char(16) NOT NULL,
  `AudioBitrate` char(10) NOT NULL,
  `AudioRate` char(10) NOT NULL,
  `AudioChannels` char(16) NOT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstauthentication
CREATE TABLE IF NOT EXISTS `tstauthentication` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Email` text DEFAULT NULL,
  `ExternalIdentifier` longtext DEFAULT NULL,
  `ExternalDisplayIdentifier` longtext DEFAULT NULL,
  `OAuthToken` longtext DEFAULT NULL,
  `OAuthAccessToken` longtext DEFAULT NULL,
  `ProviderSystemName` longtext DEFAULT NULL,
  `SecretKey` longtext DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstauthors
CREATE TABLE IF NOT EXISTS `tstauthors` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `LinkURL` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstbankaccount
CREATE TABLE IF NOT EXISTS `tstbankaccount` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `BankName` text NOT NULL,
  `AccountNumber` varchar(40) NOT NULL,
  `CardType` text DEFAULT NULL,
  `CardName` text DEFAULT NULL,
  `CardNumber` text DEFAULT NULL,
  `MaskedCreditCardNumber` text DEFAULT NULL,
  `CardCvv2` varchar(3) DEFAULT NULL,
  `CardExpirationMonth` varchar(2) DEFAULT NULL,
  `CardExpirationYear` varchar(4) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstbanners
CREATE TABLE IF NOT EXISTS `tstbanners` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `LinkURL` longtext NOT NULL,
  `CoverImageId` bigint(20) NOT NULL,
  `HtmlText` longtext DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `ExpiryDate` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstbrands
CREATE TABLE IF NOT EXISTS `tstbrands` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) NOT NULL,
  `BrandName` text NOT NULL,
  `CountryId` bigint(20) DEFAULT NULL,
  `Industry` text DEFAULT NULL,
  `WebsiteURL` text DEFAULT NULL,
  `OtherURL` text DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcalendarevents
CREATE TABLE IF NOT EXISTS `tstcalendarevents` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Location` text DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcampaigns
CREATE TABLE IF NOT EXISTS `tstcampaigns` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` longtext NOT NULL,
  `Subject` longtext NOT NULL,
  `Body` longtext NOT NULL,
  `Category` longtext DEFAULT NULL,
  `Location` longtext DEFAULT NULL,
  `CampaignStatus` tinyint(1) DEFAULT NULL,
  `ExpectedRevenue` decimal(18,4) DEFAULT NULL,
  `BudgetCost` decimal(18,4) DEFAULT NULL,
  `ActualCost` decimal(18,4) DEFAULT NULL,
  `ExpectedResponse` text DEFAULT NULL,
  `NumberSent` int(11) DEFAULT NULL,
  `Sponsor` text DEFAULT NULL,
  `TargetAudience` text DEFAULT NULL,
  `TargetSize` int(10) DEFAULT NULL,
  `ExpectedResponseCount` int(10) DEFAULT NULL,
  `ExpectedSalesCount` int(10) DEFAULT NULL,
  `ExpectedROI` decimal(18,4) DEFAULT NULL,
  `ActualResponseCount` int(10) DEFAULT NULL,
  `ActualSalesCount` int(10) DEFAULT NULL,
  `ActualROI` decimal(18,4) DEFAULT NULL,
  `ClosingDate` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcart
CREATE TABLE IF NOT EXISTS `tstcart` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Quantity` int(11) DEFAULT 1,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcategories
CREATE TABLE IF NOT EXISTS `tstcategories` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `MetaKeywords` text DEFAULT NULL,
  `MetaTitle` text DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `ParentCategoryId` bigint(20) DEFAULT NULL,
  `PictureId` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstclassifieds
CREATE TABLE IF NOT EXISTS `tstclassifieds` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `BannerId` bigint(20) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstclubs
CREATE TABLE IF NOT EXISTS `tstclubs` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) NOT NULL,
  `ClubName` text,
  `Description` longtext DEFAULT NULL,
  `DateEstablished` date DEFAULT NULL,
  `Location` longtext DEFAULT NULL,
  `MembersCount` int(11) DEFAULT NULL,
  `SubscriptionPrice` decimal(18,4) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstclubsubscriptions
CREATE TABLE IF NOT EXISTS `tstclubsubscriptions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `SubscriptionGuId` char(36) NOT NULL,
  `ClubId` bigint(20) NOT NULL,
  `SubscriptionType` text DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcollections
CREATE TABLE IF NOT EXISTS `tstcollections` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `DeveloperId` bigint(20) NOT NULL,
  `CollectionName` text NOT NULL,
  `DateCreated` date DEFAULT NULL,
  `DateModified` date DEFAULT NULL,
  `CategoryId` bigint(20) DEFAULT NULL,
  `PictureId` bigint(20) DEFAULT NULL,
  `NumberOfFiles` int(11) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcollectionsitems
CREATE TABLE IF NOT EXISTS `tstcollectionsitems` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CollectionId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcomments
CREATE TABLE IF NOT EXISTS `tstcomments` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PostId` bigint(20) NOT NULL,
  `SenderId` bigint(20) NOT NULL,
  `RecepientId` bigint(20) NOT NULL,
  `CommentText` longtext NOT NULL,
  `IsApproved` tinyint(1) NOT NULL DEFAULT '1',
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsDeletedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcompetitions
CREATE TABLE IF NOT EXISTS `tstcompetitions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `GameId` bigint(20) DEFAULT NULL,
  `CompetitionName` text NOT NULL,
  `Description` longtext NOT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `CompetitionModel` text DEFAULT NULL,
  `CategoryId` bigint(20) DEFAULT NULL,
  `Keywords` text DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Location` text DEFAULT NULL,
  `EntryPrice` decimal(18,4) DEFAULT NULL,
  `TeamSize` int(11) DEFAULT NULL,
  `MaxNoOfTeams` int(11) DEFAULT NULL,
  `TeamsRegistered` int(11) DEFAULT NULL,
  `TotalPrizeMoney` decimal(18,4) DEFAULT NULL,
  `FirstPlaceId` bigint(20) DEFAULT NULL,
  `SecondPlaceId` bigint(20) DEFAULT NULL,
  `ThirdPlaceId` bigint(20) DEFAULT NULL,
  `FourthPlaceId` bigint(20) DEFAULT NULL,
  `FifthPlaceId` bigint(20) DEFAULT NULL,
  `SixthPlaceId` bigint(20) DEFAULT NULL,
  `SeventhPlaceId` bigint(20) DEFAULT NULL,
  `EigthPlaceId` bigint(20) DEFAULT NULL,
  `NinthPlaceId` bigint(20) DEFAULT NULL,
  `TenthPlaceId` bigint(20) DEFAULT NULL,
  `FirstPlaceReward` decimal(18,4) DEFAULT NULL,
  `SecondPlaceReward` decimal(18,4) DEFAULT NULL,
  `ThirdPlaceReward` decimal(18,4) DEFAULT NULL,
  `FourthPlaceReward` decimal(18,4) DEFAULT NULL,
  `FifthPlaceReward` decimal(18,4) DEFAULT NULL,
  `SixthPlaceReward` decimal(18,4) DEFAULT NULL,
  `SeventhPlaceReward` decimal(18,4) DEFAULT NULL,
  `EigthPlaceReward` decimal(18,4) DEFAULT NULL,
  `NinthPlaceReward` decimal(18,4) DEFAULT NULL,
  `TenthPlaceReward` decimal(18,4) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcountry
CREATE TABLE IF NOT EXISTS `tstcountry` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `CountryName` text NOT NULL,
  `TwoLetterIsoCode` varchar(2) DEFAULT NULL,
  `ThreeLetterIsoCode` varchar(3) DEFAULT NULL,
  `AllowsBilling` tinyint(1) NOT NULL,
  `AllowsShipping` tinyint(1) NOT NULL,
  `NumericIsoCode` bigint(20) NOT NULL,
  `SubjectToVat` tinyint(1) NOT NULL,
  `Published` tinyint(1) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcourses
CREATE TABLE IF NOT EXISTS `tstcourses` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CategoryId` bigint(20) NOT NULL,
  `DateCreated` datetime DEFAULT NULL,
  `Title` text NOT NULL,
  `Description` longtext DEFAULT NULL,
  `IconURL` longtext DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcurrency
CREATE TABLE IF NOT EXISTS `tstcurrency` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `CurrencyCode` varchar(5) NOT NULL,
  `DisplayLocale` text DEFAULT NULL,
  `CustomFormatting` text DEFAULT NULL,
  `Rate` decimal(18,4) NOT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  `Published` tinyint(1) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `RoundingTypeId` bigint(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstcustomers
CREATE TABLE IF NOT EXISTS `tstcustomers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Username` text DEFAULT NULL,
  `Email` text DEFAULT NULL,
  `DateOfBirth` datetime DEFAULT NULL,
  `CurrencyId` bigint(20) DEFAULT NULL,
  `LanguageId` bigint(20) DEFAULT NULL,
  `StateProvinceId` bigint(20) DEFAULT NULL,
  `LastIpLocation` text DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsDeletedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstdevelopers
CREATE TABLE IF NOT EXISTS `tstdevelopers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstdiscounts
CREATE TABLE IF NOT EXISTS `tstdiscounts` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `DiscountName` text NOT NULL,
  `CouponCode` text DEFAULT NULL,
  `AdminComment` longtext DEFAULT NULL,
  `DiscountTypeId` bigint(20) NOT NULL,
  `UsePercentage` tinyint(1) NOT NULL,
  `DiscountPercentage` decimal(18,4) NOT NULL,
  `DiscountAmount` decimal(18,4) NOT NULL,
  `MaximumDiscountAmount` decimal(18,4) DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `RequiresCouponCode` tinyint(1) NOT NULL,
  `IsCumulative` tinyint(1) NOT NULL,
  `DiscountLimitationId` bigint(20) NOT NULL,
  `LimitationTimes` bigint(20) NOT NULL,
  `MaximumDiscountedQuantity` bigint(20) DEFAULT NULL,
  `AppliedToSubCategories` tinyint(1) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstdownloads
CREATE TABLE IF NOT EXISTS `tstdownloads` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `DownloadGuId` char(36) NOT NULL,
  `UseDownloadURL` tinyint(1) NOT NULL,
  `DownloadURL` longtext DEFAULT NULL,
  `DownloadBinary` longblob,
  `ContentType` longtext DEFAULT NULL,
  `FileName` longtext DEFAULT NULL,
  `Extension` longtext DEFAULT NULL,
  `IsNew` tinyint(1) NOT NULL DEFAULT '0',
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstebooks
CREATE TABLE IF NOT EXISTS `tstebooks` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `ISBN` char(13) NOT NULL,
  `Title` text NOT NULL,
  `Description` longtext DEFAULT NULL,
  `Category` bigint(20) DEFAULT NULL,
  `Edition` char(30) DEFAULT NULL,
  `PublisherId` bigint(20) NOT NULL,
  `LanguageId` bigint(20) NOT NULL,
  `CoverPhotoId` bigint(20) NOT NULL,
  `Tags` text NOT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstenrollment
CREATE TABLE IF NOT EXISTS `tstenrollment` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MemberId` bigint(20) NOT NULL,
  `CourseId` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstfaq
CREATE TABLE IF NOT EXISTS `tstfaq` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Question` text DEFAULT NULL,
  `Answer` text DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstfiles
CREATE TABLE IF NOT EXISTS `tstfiles` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MemberId` bigint(20) NOT NULL DEFAULT '0',
  `FolderId` bigint(20) NOT NULL DEFAULT '0',
  `ParentFileId` bigint(20) NOT NULL DEFAULT '0',
  `DateAdded` datetime DEFAULT NULL,
  `DateModified` datetime DEFAULT NULL,
  `NumberOfComments` bigint(20) NOT NULL DEFAULT '0',
  `NumberOfRevisions` bigint(20) NOT NULL DEFAULT '0',
  `FileName` longtext NOT NULL,
  `FileExtension` text NOT NULL,
  `FileSize` bigint(20) NOT NULL DEFAULT '0',
  `VirtualPath` longtext NOT NULL,
  `Description` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstfolders
CREATE TABLE IF NOT EXISTS `tstfolders` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ParentFolderId` bigint(20) NOT NULL DEFAULT '0',
  `Title` text NOT NULL,
  `VirtualPath` longtext NOT NULL,
  `Description` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforumgroup
CREATE TABLE IF NOT EXISTS `tstforumgroup` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `GroupName` text NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforumpost
CREATE TABLE IF NOT EXISTS `tstforumpost` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Text` longtext NOT NULL,
  `IpAddress` text DEFAULT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `TopicId` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `VoteCount` bigint(20) NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforumprivatemessage
CREATE TABLE IF NOT EXISTS `tstforumprivatemessage` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Subject` text NOT NULL,
  `Text` longtext NOT NULL,
  `FromCustomerId` bigint(20) NOT NULL,
  `ToCustomerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) NOT NULL,
  `IsRead` tinyint(1) NOT NULL,
  `IsDeletedByAuthor` tinyint(1) NOT NULL,
  `IsDeletedByRecipient` tinyint(1) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforums
CREATE TABLE IF NOT EXISTS `tstforums` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `ForumGroupId` bigint(20) NOT NULL,
  `Description` longtext DEFAULT NULL,
  `NumTopics` bigint(20) NOT NULL,
  `NumPosts` bigint(20) NOT NULL,
  `LastTopicId` bigint(20) NOT NULL,
  `LastPostId` bigint(20) NOT NULL,
  `LastPostCustomerId` bigint(20) NOT NULL,
  `LastPostTime` datetime DEFAULT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforumsubscriptions
CREATE TABLE IF NOT EXISTS `tstforumsubscriptions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `SubscriptionGuId` char(36) NOT NULL,
  `ForumId` bigint(20) NOT NULL,
  `TopicId` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstforumtopic
CREATE TABLE IF NOT EXISTS `tstforumtopic` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Subject` text NOT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `ForumId` bigint(20) NOT NULL,
  `TopicTypeId` bigint(20) NOT NULL,
  `NumPosts` bigint(20) NOT NULL,
  `LastPostId` bigint(20) NOT NULL,
  `LastPostCustomerId` bigint(20) NOT NULL,
  `LastPostTime` datetime DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstgenres
CREATE TABLE IF NOT EXISTS `tstgenres` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Description` text DEFAULT NULL,
  `CoverPhotoId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstgiftcards
CREATE TABLE IF NOT EXISTS `tstgiftcards` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `PurchasedWithOrderItemId` bigint(20) DEFAULT NULL,
  `GiftCardTypeId` bigint(20) NOT NULL,
  `Amount` decimal(18,4) NOT NULL,
  `IsGiftCardActivated` tinyint(1) NOT NULL,
  `GiftCardCouponCode` text DEFAULT NULL,
  `RecipientName` text DEFAULT NULL,
  `RecipientEmail` text DEFAULT NULL,
  `SenderName` text DEFAULT NULL,
  `SenderEmail` text DEFAULT NULL,
  `Message` longtext DEFAULT NULL,
  `IsRecipientNotified` tinyint(1) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstgradebook
CREATE TABLE IF NOT EXISTS `tstgradebook` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `LearnerId` bigint(20) DEFAULT NULL,
  `CourseId` bigint(20) DEFAULT NULL,
  `ExamScore` int(11) DEFAULT NULL,
  `AssignmentScore` int(11) DEFAULT NULL,
  `FinalGrade` varchar(1) DEFAULT NULL,
  `Comments` longtext DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstlanguage
CREATE TABLE IF NOT EXISTS `tstlanguage` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `LanguageCulture` varchar(20) NOT NULL,
  `UniqueSeoCode` varchar(2) DEFAULT NULL,
  `FlagImageFileName` text DEFAULT NULL,
  `Rtl` tinyint(1) NOT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  `DefaultCurrencyId` bigint(20) NOT NULL,
  `Published` tinyint(1) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstlinks
CREATE TABLE IF NOT EXISTS `tstlinks` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `PostId` bigint(20) DEFAULT NULL,
  `LinkURL` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmanufacturers
CREATE TABLE IF NOT EXISTS `tstmanufacturers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ManufacturerName` text NOT NULL,
  `MetaKeywords` text DEFAULT NULL,
  `MetaTitle` text DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `PictureId` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmoviecrew
CREATE TABLE IF NOT EXISTS `tstmoviecrew` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MovieId` bigint(20) DEFAULT NULL,
  `MovieSeriesId` bigint(20) DEFAULT NULL,
  `MovieEpisodeId` bigint(20) DEFAULT NULL,
  `CastName` text,
  `MovieRole` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmovieepisodes
CREATE TABLE IF NOT EXISTS `tstmovieepisodes` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MovieSeriesId` bigint(20) DEFAULT NULL,
  `EpisodeNumber` int(11) DEFAULT NULL,
  `EpisodeTitle` text DEFAULT NULL,
  `Duration` bigint(20) DEFAULT NULL,
  `ReleaseDate` date DEFAULT NULL,
  `GenreId` bigint(20) DEFAULT NULL,
  `Keywords` text DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmovies
CREATE TABLE IF NOT EXISTS `tstmovies` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `VideoId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Description` longtext DEFAULT NULL,
  `ReleaseDate` date DEFAULT NULL,
  `LanguageId` tinyint(4) NOT NULL,
  `RentalDuration` bigint(20) NOT NULL DEFAULT '3',
  `RentalRate` decimal(4,2) NOT NULL DEFAULT '4.99',
  `FilmLength` bigint(20) DEFAULT NULL,
  `ReplacementCost` decimal(5,2) NOT NULL DEFAULT '19.99',
  `Rating` text DEFAULT NULL,
  `TrailerURL` longtext DEFAULT NULL,
  `SpecialFeatures` text DEFAULT NULL,
  `LastUpDate` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmovieseries
CREATE TABLE IF NOT EXISTS `tstmovieseries` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Duration` bigint(20) DEFAULT NULL,
  `ReleaseDate` date DEFAULT NULL,
  `GenreId` bigint(20) DEFAULT NULL,
  `Keywords` text DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `NumberOfEpisodes` int(11) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmusicians
CREATE TABLE IF NOT EXISTS `tstmusicians` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `MusicianName` text NOT NULL,
  `Description` longtext DEFAULT NULL,
  `InstrumentsPlayed` text DEFAULT NULL,
  `Category` text DEFAULT NULL,
  `NumberOfSongs` int(11) DEFAULT NULL,
  `DateJoined` date DEFAULT NULL,
  `YearsActive` int(11) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstmusictracks
CREATE TABLE IF NOT EXISTS `tstmusictracks` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `AlbumId` bigint(20) DEFAULT NULL,
  `AudioId` bigint(20) NOT NULL,
  `PublisherId` bigint(20) NOT NULL,
  `ArtistName` text NOT NULL,
  `TrackTitle` text NOT NULL,
  `Genre` text DEFAULT NULL,
  `PlayTime` time DEFAULT NULL,
  `Lyrics` text DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstnews
CREATE TABLE IF NOT EXISTS `tstnews` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `ShortTitle` text NOT NULL,
  `FullTitle` text NOT NULL,
  `MetaKeywords` text DEFAULT NULL,
  `MetaTitle` text DEFAULT NULL,
  `LanguageId` bigint(20) NOT NULL,
  `Published` tinyint(1) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `AllowComments` tinyint(1) NOT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstnewsletters
CREATE TABLE IF NOT EXISTS `tstnewsletters` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `CategoryId` bigint(20) NOT NULL,
  `Description` longtext NOT NULL,
  `CoverPhotoId` bigint(20) DEFAULT NULL,
  `FileDocumentId` bigint(20) DEFAULT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = Not Published, 1= Published',
  `SubscriptionPrice` decimal(18,4) DEFAULT NULL,
  `DateCreated` datetime DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstnewslettersubscription
CREATE TABLE IF NOT EXISTS `tstnewslettersubscription` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `NewsletterId` bigint(20) NOT NULL,
  `Email` text NOT NULL,
  `NewsLetterSubscriptionGuId` char(36) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Active` tinyint(1) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstnotes
CREATE TABLE IF NOT EXISTS `tstnotes` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `PostId` bigint(20) DEFAULT NULL,
  `Title` text NOT NULL,
  `Description` text DEFAULT NULL,
  `Tags` text DEFAULT NULL,
  `Pinned` tinyint(1) NOT NULL DEFAULT '0',
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstnotifications
CREATE TABLE IF NOT EXISTS `tstnotifications` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `TimeSent` datetime DEFAULT NULL,
  `IsRead` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstorderitem
CREATE TABLE IF NOT EXISTS `tstorderitem` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `OrderId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Quantity` bigint(20) NOT NULL,
  `UnitPriceInclTax` decimal(18,4) NOT NULL,
  `UnitPriceExclTax` decimal(18,4) NOT NULL,
  `PriceInclTax` decimal(18,4) NOT NULL,
  `PriceExclTax` decimal(18,4) NOT NULL,
  `DiscountAmountInclTax` decimal(18,4) NOT NULL,
  `DiscountAmountExclTax` decimal(18,4) NOT NULL,
  `OriginalProductCost` decimal(18,4) NOT NULL,
  `AttributeDescription` longtext DEFAULT NULL,
  `AttributesXml` longtext DEFAULT NULL,
  `DownloadCount` bigint(20) NOT NULL,
  `RentalStartDate` datetime DEFAULT NULL,
  `RentalEndDate` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstorders
CREATE TABLE IF NOT EXISTS `tstorders` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CustomOrderNumber` text NOT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) NOT NULL,
  `PaymentStatusId` bigint(20) NOT NULL,
  `PaymentMethodSystemName` text DEFAULT NULL,
  `CustomerCurrencyCode` text DEFAULT NULL,
  `CurrencyRate` decimal(18,4) NOT NULL,
  `OrderSubtotalInclTax` decimal(18,4) NOT NULL,
  `OrderSubtotalExclTax` decimal(18,4) NOT NULL,
  `OrderSubTotalDiscountInclTax` decimal(18,4) NOT NULL,
  `OrderSubTotalDiscountExclTax` decimal(18,4) NOT NULL,
  `PaymentMethodAdditionalFeeInclTax` decimal(18,4) NOT NULL,
  `PaymentMethodAdditionalFeeExclTax` decimal(18,4) NOT NULL,
  `TaxRates` text DEFAULT NULL,
  `OrderTax` decimal(18,4) NOT NULL,
  `OrderDiscount` decimal(18,4) NOT NULL,
  `OrderTotal` decimal(18,4) NOT NULL,
  `RefundedAmount` decimal(18,4) NOT NULL,
  `AffiliateId` bigint(20) NOT NULL,
  `BankCardId` bigint(20) NOT NULL,
  `AuthorizationTransactionId` longtext DEFAULT NULL,
  `AuthorizationTransactionCode` longtext DEFAULT NULL,
  `AuthorizationTransactionResult` longtext DEFAULT NULL,
  `CaptureTransactionId` longtext DEFAULT NULL,
  `CaptureTransactionResult` longtext DEFAULT NULL,
  `SubscriptionTransactionId` longtext DEFAULT NULL,
  `PaidDate` datetime DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpdf
CREATE TABLE IF NOT EXISTS `tstpdf` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Generator` text NOT NULL COMMENT '263deals',
  `ModuleName` text NOT NULL COMMENT 'Name of the module',
  `HeaderContent` mediumtext DEFAULT NULL,
  `BodyContent` mediumtext DEFAULT NULL,
  `FooterContent` mediumtext DEFAULT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT '0',
  `PrimaryName` text NOT NULL,
  `SecondaryName` text NOT NULL,
  `MetaAuthor` text NOT NULL,
  `MetaKeywords` text NOT NULL,
  `MetatagsStatus` tinyint(1) NOT NULL,
  `MetaSubject` text NOT NULL,
  `MetaTitle` text NOT NULL,
  `PageFormat` text NOT NULL,
  `MarginChkbox` tinyint(1) DEFAULT NULL,
  `MarginTop` smallint(2) DEFAULT NULL,
  `MarginBottom` smallint(2) DEFAULT NULL,
  `MarginLeft` smallint(2) DEFAULT NULL,
  `MarginRight` smallint(2) DEFAULT NULL,
  `HeaderHeight` smallint(2) DEFAULT NULL,
  `FooterHeight` smallint(2) DEFAULT NULL,
  `PageOrientation` varchar(30) NOT NULL,
  `Language` varchar(7) NOT NULL,
  `FileName` text NOT NULL,
  `Visibility` text NOT NULL,
  `Default` tinyint(1) DEFAULT NULL,
  `Conditions` text DEFAULT NULL,
  `WatermarkType` tinyint(1) NOT NULL DEFAULT '0',
  `WatermarkText` text NOT NULL,
  `WatermarkAngle` smallint(3) NOT NULL,
  `WatermarkImage` text NOT NULL,
  `TemplateMembers` text NOT NULL,
  `OnePdf` tinyint(1) DEFAULT NULL,
  `Type` tinyint(1) DEFAULT '0',
  `Styles` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstphotos
CREATE TABLE IF NOT EXISTS `tstphotos` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Description` longtext NOT NULL,
  `Tags` text NOT NULL,
  `DateAdded` datetime DEFAULT NULL,
  `LastViewed` datetime DEFAULT NULL,
  `Reported` tinyint(1) DEFAULT '0',
  `FileName` longtext NOT NULL,
  `Extension` char(5) NOT NULL,
  `VirtualPath` longtext DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstplaylist
CREATE TABLE IF NOT EXISTS `tstplaylist` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `PlaylistName` text NOT NULL,
  `DateCreated` datetime DEFAULT NULL,
  `DateModified` datetime DEFAULT NULL,
  `Status` text COMMENT 'public',
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpollanswer
CREATE TABLE IF NOT EXISTS `tstpollanswer` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `PollId` bigint(20) NOT NULL,
  `NumberOfVotes` bigint(20) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpolls
CREATE TABLE IF NOT EXISTS `tstpolls` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `LanguageId` bigint(20) NOT NULL,
  `SystemKeywords` longtext DEFAULT NULL,
  `Published` tinyint(1) NOT NULL,
  `ShowOnHomepage` tinyint(1) NOT NULL,
  `AllowGuestsToVote` tinyint(1) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpost
CREATE TABLE IF NOT EXISTS `tstpost` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` longtext NOT NULL,
  `Body` longtext NOT NULL,
  `MetaKeywords` text DEFAULT NULL,
  `MetaTitle` text DEFAULT NULL,
  `LanguageId` bigint(20) DEFAULT NULL,
  `BodyOverview` longtext DEFAULT NULL,
  `AllowComments` tinyint(1) NOT NULL DEFAULT '1',
  `Tags` longtext DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `LimitedToStores` tinyint(1) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpresets
CREATE TABLE IF NOT EXISTS `tstpresets` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstproducts
CREATE TABLE IF NOT EXISTS `tstproducts` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `StoreId` bigint(20) DEFAULT NULL,
  `ProductName` text NOT NULL,
  `MetaKeywords` text DEFAULT NULL,
  `MetaTitle` text DEFAULT NULL,
  `Sku` text DEFAULT NULL,
  `Gtin` text DEFAULT NULL,
  `ProductTypeId` bigint(20) DEFAULT NULL,
  `ShortDescription` longtext DEFAULT NULL,
  `FullDescription` longtext DEFAULT NULL,
  `MetaDescription` longtext DEFAULT NULL,
  `AllowCustomerReviews` tinyint(1) DEFAULT NULL,
  `ApprovedRatingSum` bigint(20) DEFAULT NULL,
  `NotApprovedRatingSum` bigint(20) DEFAULT NULL,
  `IsGiftCard` tinyint(1) DEFAULT NULL,
  `GiftCardTypeId` bigint(20) DEFAULT NULL,
  `OverriddenGiftCardAmount` decimal(18,4) DEFAULT NULL,
  `IsDownload` tinyint(1) DEFAULT NULL,
  `DownloadId` bigint(20) DEFAULT NULL,
  `UnlimitedDownloads` tinyint(1) DEFAULT NULL,
  `MaxNumberOfDownloads` bigint(20) DEFAULT NULL,
  `DownloadExpirationDays` bigint(20) DEFAULT NULL,
  `DownloadActivationTypeId` bigint(20) DEFAULT NULL,
  `HasSampleDownload` tinyint(1) DEFAULT NULL,
  `SampleDownloadId` bigint(20) DEFAULT NULL,
  `HasUserAgreement` tinyint(1) DEFAULT NULL,
  `UserAgreementText` longtext DEFAULT NULL,
  `IsRecurring` tinyint(1) DEFAULT NULL,
  `RecurringCycleLength` bigint(20) DEFAULT NULL,
  `RecurringCyclePeriodId` bigint(20) DEFAULT NULL,
  `RecurringTotalCycles` bigint(20) DEFAULT NULL,
  `IsRental` tinyint(1) DEFAULT NULL,
  `RentalPriceLength` bigint(20) DEFAULT NULL,
  `IsTaxExempt` tinyint(1) DEFAULT NULL,
  `TaxCategoryId` bigint(20) DEFAULT NULL,
  `StockQuantity` bigint(20) DEFAULT NULL,
  `MinStockQuantity` bigint(20) DEFAULT NULL,
  `AllowBackInStockSubscriptions` tinyint(1) DEFAULT NULL,
  `OrderMinimumQuantity` bigint(20) DEFAULT NULL,
  `OrderMaximumQuantity` bigint(20) DEFAULT NULL,
  `Price` decimal(18,4) DEFAULT NULL,
  `OldPrice` decimal(18,4) DEFAULT NULL,
  `ProductCost` decimal(18,4) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstproducttags
CREATE TABLE IF NOT EXISTS `tstproducttags` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) DEFAULT NULL,
  `Name` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstpublishers
CREATE TABLE IF NOT EXISTS `tstpublishers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `City` text DEFAULT NULL,
  `CountryId` bigint(20) DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstrecurringpayments
CREATE TABLE IF NOT EXISTS `tstrecurringpayments` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `InitialOrderId` bigint(20) NOT NULL,
  `CycleLength` bigint(20) NOT NULL,
  `CyclePeriodId` bigint(20) NOT NULL,
  `TotalCycles` bigint(20) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `HasLastPaymentFailed` tinyint(1) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstsalesreturns
CREATE TABLE IF NOT EXISTS `tstsalesreturns` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ReasonForReturn` longtext NOT NULL,
  `RequestedAction` longtext NOT NULL,
  `CustomerId` bigint(20) NOT NULL,
  `CustomNumber` text DEFAULT NULL,
  `StoreId` bigint(20) NOT NULL,
  `OrderItemId` bigint(20) NOT NULL,
  `Quantity` bigint(20) NOT NULL,
  `ReturnedQuantity` bigint(20) NOT NULL,
  `CustomerComments` longtext DEFAULT NULL,
  `UploadedFileId` bigint(20) NOT NULL,
  `StaffNotes` longtext DEFAULT NULL,
  `ReturnRequestStatusId` bigint(20) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstsearches
CREATE TABLE IF NOT EXISTS `tstsearches` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Keywords` longtext DEFAULT NULL,
  `DateSearched` datetime DEFAULT NULL,
  `Count` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstsettings
CREATE TABLE IF NOT EXISTS `tstsettings` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `Value` longtext NOT NULL,
  `StoreId` bigint(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstshortstories
CREATE TABLE IF NOT EXISTS `tstshortstories` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Content` longtext NOT NULL,
  `CategoryId` bigint(20) DEFAULT NULL,
  `CoverPhotoId` bigint(20) DEFAULT NULL,
  `Keywords` text DEFAULT NULL,
  `DatePublished` datetime DEFAULT NULL,
  `DateModified` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tststateprovince
CREATE TABLE IF NOT EXISTS `tststateprovince` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Name` text NOT NULL,
  `Abbreviation` text DEFAULT NULL,
  `CountryId` bigint(20) NOT NULL,
  `Published` tinyint(1) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tststore
CREATE TABLE IF NOT EXISTS `tststore` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `StoreName` text NOT NULL,
  `StoreURL` text NOT NULL,
  `Hosts` text DEFAULT NULL,
  `CompanyName` text DEFAULT NULL,
  `CompanyAddress` text DEFAULT NULL,
  `CompanyPhoneNumber` text DEFAULT NULL,
  `CompanyVat` text DEFAULT NULL,
  `DefaultMetaKeywords` longtext DEFAULT NULL,
  `DefaultMetaDescription` longtext DEFAULT NULL,
  `DefaultTitle` longtext DEFAULT NULL,
  `HomepageTitle` longtext DEFAULT NULL,
  `HomepageDescription` longtext DEFAULT NULL,
  `SslEnabled` tinyint(1) NOT NULL,
  `DefaultLanguageId` bigint(20) NOT NULL,
  `DisplayOrder` bigint(20) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttaxrates
CREATE TABLE IF NOT EXISTS `tsttaxrates` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `CountryId` bigint(20) NOT NULL,
  `StateProvinceId` bigint(20) NOT NULL,
  `Percentage` decimal(18,4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttermsconditions
CREATE TABLE IF NOT EXISTS `tsttermsconditions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `TermNumber` varchar(10) DEFAULT NULL,
  `Title` text DEFAULT NULL,
  `Content` text DEFAULT NULL,
  `EffectiveDate` datetime DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttestresults
CREATE TABLE IF NOT EXISTS `tsttestresults` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `TestId` bigint(20) NOT NULL,
  `DateTaken` datetime DEFAULT NULL,
  `FinalScore` char(5) NOT NULL,
  `Status` tinyint(4) NOT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttests
CREATE TABLE IF NOT EXISTS `tsttests` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CourseId` bigint(20) NOT NULL,
  `Title` text NOT NULL,
  `Format` tinyint(4) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `RandomizeOrder` tinyint(4) NOT NULL,
  `NumQuestions` tinyint(4) NOT NULL,
  `Instructions` text DEFAULT NULL,
  `ContentId` bigint(20) NOT NULL,
  `ResultRelease` tinyint(4) NOT NULL,
  `Difficulty` tinyint(4) NOT NULL,
  `NumTakes` tinyint(4) NOT NULL,
  `Description` text DEFAULT NULL,
  `PassScore` mediumint(9) NOT NULL,
  `PassPercent` mediumint(9) NOT NULL,
  `PassFeedback` text DEFAULT NULL,
  `FailFeedback` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttestsanswers
CREATE TABLE IF NOT EXISTS `tsttestsanswers` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `QuestionId` bigint(20) NOT NULL,
  `Answer` text DEFAULT NULL,
  `Score` varchar(5) NOT NULL,
  `Notes` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttestsquestions
CREATE TABLE IF NOT EXISTS `tsttestsquestions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `CourseId` bigint(20) NOT NULL,
  `Feedback` text DEFAULT NULL,
  `Question` text DEFAULT NULL,
  `Choice_0` text DEFAULT NULL,
  `Choice_1` text DEFAULT NULL,
  `Choice_2` text DEFAULT NULL,
  `Choice_3` text DEFAULT NULL,
  `Choice_4` text DEFAULT NULL,
  `ExpectedAnswer` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttransactions
CREATE TABLE IF NOT EXISTS `tsttransactions` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `SenderId` bigint(20) NOT NULL,
  `ReceiverId` bigint(20) NOT NULL,
  `CurrencyId` bigint(20) DEFAULT NULL,
  `TypeOfTransaction` text DEFAULT NULL,
  `TransactionDetails` text DEFAULT NULL,
  `PaymentMethod` text NOT NULL,
  `AccountName` text NOT NULL,
  `AccountNumber` text NOT NULL,
  `AmountPaid` decimal(18,4) NOT NULL,
  `Date` datetime DEFAULT NULL,
  `ReceiptNo` text DEFAULT NULL,
  `Reason` text DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tsttutors
CREATE TABLE IF NOT EXISTS `tsttutors` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `PictureId` bigint(20) DEFAULT NULL,
  `Email` text DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Qualifications` longtext DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `JoiningDate` datetime DEFAULT NULL,
  `RegistrationDate` datetime DEFAULT NULL,
  `IsPublic` tinyint(1) DEFAULT '1',
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstvideos
CREATE TABLE IF NOT EXISTS `tstvideos` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `Status` int(2) NOT NULL,
  `Encoder` char(16) NOT NULL,
  `Path` longtext NOT NULL,
  `FileName` char(64) NOT NULL,
  `Extension` char(8) NOT NULL,
  `Format` char(32) NOT NULL,
  `Duration` char(10) NOT NULL,
  `Size` char(10) NOT NULL,
  `Bitrate` char(6) NOT NULL,
  `VideoWidth` char(5) NOT NULL,
  `VideoHeight` char(5) NOT NULL,
  `VideoWhRatio` char(10) NOT NULL,
  `VideoCodec` char(16) NOT NULL,
  `VideoRate` char(10) NOT NULL,
  `VideoBitrate` char(10) NOT NULL,
  `VideoColor` char(16) NOT NULL,
  `AudioCodec` char(16) NOT NULL,
  `AudioBitrate` char(10) NOT NULL,
  `AudioRate` char(10) NOT NULL,
  `AudioChannels` char(16) NOT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstvotes
CREATE TABLE IF NOT EXISTS `tstvotes` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PollId` bigint(20) NOT NULL,
  `CandidateId` bigint(20) NOT NULL,
  `VoterId` bigint(20) NOT NULL,
  `Choice` tinyint(1) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstwishlist
CREATE TABLE IF NOT EXISTS `tstwishlist` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `DatePosted` datetime DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table tstdbv4.tstzuckstories
CREATE TABLE IF NOT EXISTS `tstzuckstories` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OwnerId` bigint(20) NOT NULL,
  `PostId` bigint(20) DEFAULT NULL,
  `PictureId` bigint(20) DEFAULT NULL,
  `Content` text NOT NULL,
  `DatePublished` datetime DEFAULT NULL,
  `Likes` bigint(20) DEFAULT NULL,
  `Views` bigint(20) DEFAULT NULL,
  `Shares` bigint(20) DEFAULT NULL,
  `IsDeleted` tinyint(1) DEFAULT '0',
  `IsActive` tinyint(1) DEFAULT '1',
  `IsDeletedOn` datetime DEFAULT NULL,
  `IsActiveOn` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
