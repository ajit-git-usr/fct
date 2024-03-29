USE [master]
GO
/****** Object:  Database [FCT]    Script Date: 2020-01-13 11:40:10 AM ******/
CREATE DATABASE [FCT]
 --CONTAINMENT = NONE
 --ON  PRIMARY 
--( NAME = N'FCT', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\FCT.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
-- LOG ON 
--( NAME = N'FCT_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\FCT_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [FCT] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FCT].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FCT] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FCT] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FCT] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FCT] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FCT] SET ARITHABORT OFF 
GO
ALTER DATABASE [FCT] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FCT] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FCT] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FCT] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FCT] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FCT] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FCT] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FCT] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FCT] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FCT] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FCT] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FCT] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FCT] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FCT] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FCT] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FCT] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FCT] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FCT] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [FCT] SET  MULTI_USER 
GO
ALTER DATABASE [FCT] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FCT] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FCT] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FCT] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [FCT] SET DELAYED_DURABILITY = DISABLED 
GO
USE [FCT]
GO
/****** Object:  Table [dbo].[customers]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[customers](
	[Id] [int] NOT NULL,
	[name] [varchar](255) NULL,
	[email] [varchar](255) NULL,
	[password] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[products]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[products](
	[Id] [int] NOT NULL,
	[name] [varchar](max) NOT NULL,
	[price] [nvarchar](max) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Purchase]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchase](
	[id] [int] NOT NULL,
	[userId] [int] NULL,
	[productId] [int] NULL,
	[active] [bit] NULL,
 CONSTRAINT [PK_Purchase] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  View [dbo].[vwPurchases]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vwPurchases]
AS
SELECT dbo.Purchase.id, dbo.customers.name AS UserName, dbo.products.name AS ProductName
FROM     dbo.customers INNER JOIN
                  dbo.Purchase ON dbo.customers.Id = dbo.Purchase.userId INNER JOIN
                  dbo.products ON dbo.Purchase.productId = dbo.products.Id
WHERE  (dbo.Purchase.active = 1)

GO
INSERT [dbo].[customers] ([Id], [name], [email], [password]) VALUES (1, N'ajit', N'ajit.sada@gmail.com', N'Test')
INSERT [dbo].[customers] ([Id], [name], [email], [password]) VALUES (2, N'john', N'jo.jo@gmail.com', N'Pass123')
INSERT [dbo].[products] ([Id], [name], [price]) VALUES (1, N'Cordless Impact Driver ', N'29.99')
INSERT [dbo].[products] ([Id], [name], [price]) VALUES (2, N'HP Wet Dry Vacuum', N'87.00')
INSERT [dbo].[Purchase] ([id], [userId], [productId], [active]) VALUES (1, 1, 2, 1)
INSERT [dbo].[Purchase] ([id], [userId], [productId], [active]) VALUES (2, 1, 1, 1)
INSERT [dbo].[Purchase] ([id], [userId], [productId], [active]) VALUES (3, 2, 1, 1)
INSERT [dbo].[Purchase] ([id], [userId], [productId], [active]) VALUES (4, 2, 2, 0)
ALTER TABLE [dbo].[Purchase]  WITH CHECK ADD  CONSTRAINT [FK_Purchase_customers] FOREIGN KEY([userId])
REFERENCES [dbo].[customers] ([Id])
GO
ALTER TABLE [dbo].[Purchase] CHECK CONSTRAINT [FK_Purchase_customers]
GO
ALTER TABLE [dbo].[Purchase]  WITH CHECK ADD  CONSTRAINT [FK_Purchase_products] FOREIGN KEY([productId])
REFERENCES [dbo].[products] ([Id])
GO
ALTER TABLE [dbo].[Purchase] CHECK CONSTRAINT [FK_Purchase_products]
GO
/****** Object:  StoredProcedure [dbo].[uspAddPurchase]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[uspAddPurchase] 
(
	@CustomerId int,
	@ProductId int
)
AS
BEGIN

	INSERT INTO [dbo].[Purchase] ([userId],[productId],[active])
     VALUES (@CustomerId,@ProductId,1)
END




GO
/****** Object:  StoredProcedure [dbo].[uspDeletePurchase]    Script Date: 2020-01-13 11:40:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[uspDeletePurchase] 
(
	@CustomerId int,
	@ProductId int
)
AS
BEGIN

	UPDATE [dbo].[Purchase] SET [active] = 0 
	WHERE [userId] = @CustomerId AND [productId] = @ProductId
END




GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[25] 4[25] 3[25] 2) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "customers"
            Begin Extent = 
               Top = 282
               Left = 668
               Bottom = 445
               Right = 862
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Purchase"
            Begin Extent = 
               Top = 0
               Left = 183
               Bottom = 229
               Right = 420
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "products"
            Begin Extent = 
               Top = 111
               Left = 943
               Bottom = 301
               Right = 1152
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vwPurchases'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vwPurchases'
GO
USE [master]
GO
ALTER DATABASE [FCT] SET  READ_WRITE 
GO
