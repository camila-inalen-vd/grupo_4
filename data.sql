np/* Este codigo basicamente es para poblar las bases y tablas con informacion necesaria para hacer pruebas */

INSERT INTO brands
(id,name,brand_image)
VALUES (1,'Adidas', 'adidas.webp'),(2,'Nike','nike.webp'),(3,'Atomik','atomik.webp'),(4,'Converse','converse.webp'),(5,'Dc Shoes','dc-shoes.webp'),(6,'Fila','fila.webp'),(7,'Jaguar','jaguar.webp'),(8,'John Foos','john-foos.webp'),(9,'Kappa','kappa.webp'),(10,'New Balance','new-balance.webp'),(11,'Puma','puma.webp'),(12,'Reebok','reebok.webp'),(13,'Topper', 'topper.webp'),(14,'Wilson','wilson.webp');

INSERT INTO colors
(id,name)
VALUES (1,'Rojo'),(2,'Verde'),(3,'Amarillo'),(4,'Azul'),(5,'Violeta'),(6,'Anaranjado'),(7,'Marrón'),(8,'Gris'),(9,'Negro'),(10,'Blanco'),(11,'Rosa'),(12,'Fucsia');

INSERT INTO product_color
(id, product_id, color_id)
VALUES (1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5),
(6, 2, 1), (7, 2, 2), (8, 2, 3), (9, 2, 4),
(10, 3, 1), (11, 3, 4), (12, 3, 8), (13, 3, 4),
(14, 4, 1), (15, 4, 2), (16, 4, 3), (17, 4, 4),
(18, 5, 1), (19, 5, 2), (20, 5, 3), (21, 5, 4),
(22, 6, 1), (23, 6, 2), (24, 6, 6), (25, 6, 4),
(26, 7, 1), (27, 7, 2), (28, 7, 5), (29, 7, 4),
(30, 8, 1), (31, 8, 2), (32, 8, 10), (33, 8, 4),
(34, 9, 1), (35, 9, 2), (36, 9, 9), (37, 9, 4);


INSERT INTO product_size
(id, product_id, size_id)
VALUES (1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5),
(6, 2, 1), (7, 2, 2), (8, 2, 3), (9, 2, 4),
(10, 3, 1), (11, 3, 4), (12, 3, 8), (13, 3, 4),
(14, 4, 1), (15, 4, 2), (16, 4, 3), (17, 4, 4),
(18, 5, 1), (19, 5, 2), (20, 5, 3), (21, 5, 4),
(22, 6, 1), (23, 6, 2), (24, 6, 6), (25, 6, 4),
(26, 7, 1), (27, 7, 2), (28, 7, 5), (29, 7, 4),
(30, 8, 1), (31, 8, 2), (32, 8, 10), (33, 8, 4),
(34, 9, 1), (35, 9, 2), (36, 9, 9), (377, 9, 4);

INSERT INTO sizes
(id,number)
VALUES (1,35),(2,36),(3,37),(4,38),(5,39),(6,40),(7,41),(8,42),(9,43),(10,44);

INSERT INTO shoesmarket.products
(id, name, price, dues, discount, stock, description, large_description, upper, cover, sole, origin, brand_id, image)
VALUES
(1, "Runner 1.0", 20000, 3, 20, 23, "Que tus pies te lleven a nuevos lugares con Runner.","En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "China", 2, "img_default.jpg"),
(2, "Runner 2.0", 25000, 3, 25, 20, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "Taiwan", 1, "img_default2.jpg"),
(3, "Runner 3.0", 18000, 3, 15, 23, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "Italia", 3, "img_default3.jpg"),
(4, "Runner 4.0", 30000, 3, 20, 0, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "Indonesia", 4, "img_default4.jpg"),
(5, "Runner 5.0", 50000, 3, 20, 10, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "Argentina", 5, "img_default5.jpg"),
(6, "Runner 6.0", 55000, 3, 20, 35, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "Uruguay", 6, "img_default.jpg"),
(7, "Runner 7.0", 45000, 3, 20, 30, "Que tus pies te lleven a nuevos lugares con Runner.",  "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "China", 7, "img_default2.jpg"),
(8, "Runner 8.0", 300000, 5, 22, 0, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 9, "img_default3.jpg"),
(9, "Runner 9.0", 10000, 3, 20, 50, "Que tus pies te lleven a nuevos lugares con Runner.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 9, "img_default4.jpg");





INSERT INTO shoesmarket.users
(id, name, last_name, email, password, image, admin)
VALUES 
(1, "Camila", "Ventura", "camilavd045@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 1),
(2, "Micaela", "Garcia", "micaela@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(3, "Ramon", "Capitani", "ramon@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(4, "Valentin", "Dubois", "valentin@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(5, "Olivia", "Britos", "olivia@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(6, "Oscar", "Barretos", "oscar@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(7, "Francisco", "Barrios", "francisco@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(8, "Bautista", "Sanchez", "bautista@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(9, "Federico", "Peluca", "federico@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0),
(10, "Roberto", "Mandarin", "roberto@gmail.com", "$2a$10$TniHxolVSYd.vdx7qT31jekTWnZtq1OBPa0jEjk9W9da5PiCQ.3Wi", "img_default.jpg", 0)
