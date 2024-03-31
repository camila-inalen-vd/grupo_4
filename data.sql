np/* Este codigo basicamente es para poblar las bases y tablas con informacion necesaria para hacer pruebas */

INSERT INTO brands
(id,name,brand_image)
VALUES (1,'Adidas', 'adidas.webp'),(2,'Nike','nike.webp'),(3,'Atomik','atomik.webp'),(4,'Converse','converse.webp'),(5,'Dc Shoes','dc-shoes.webp'),(6,'Fila','fila.webp'),(7,'Jaguar','jaguar.webp'),(8,'John Foos','john-foos.webp'),(9,'Kappa','kappa.webp'),(10,'New Balance','new-balance.webp'),(11,'Puma','puma.webp'),(12,'Reebok','reebok.webp'),(13,'Topper', 'topper.webp'),(14,'Wilson','wilson.webp');

INSERT INTO colors
(id,name)
VALUES (1,'Rojo'),(2,'Verde'),(3,'Amarillo'),(4,'Azul'),(5,'Violeta'),(6,'Anaranjado'),(7,'Marrón'),(8,'Gris'),(9,'Negro'),(10,'Blanco'),(11,'Rosa'),(12,'Fucsia');

INSERT INTO product_color
(id, product_id, color_id)
VALUES 
(1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5),
(6, 2, 1), (7, 2, 2), (8, 2, 3), (9, 2, 4),
(10, 3, 1), (11, 3, 4), (12, 3, 8), (13, 3, 4),
(14, 4, 1), (15, 4, 2), (16, 4, 3), (17, 4, 4),
(18, 5, 1), (19, 5, 2), (20, 5, 3), (21, 5, 4),
(22, 6, 1), (23, 6, 2), (24, 6, 6), (25, 6, 4),
(26, 7, 1), (27, 7, 2), (28, 7, 5), (29, 7, 4),
(30, 8, 1), (31, 8, 2), (32, 8, 10), (33, 8, 4),
(34, 9, 1), (35, 9, 2), (36, 9, 9), (37, 9, 4),
(38, 10, 1), (39, 10, 2), (40, 10, 3), (41, 10, 4),
(42, 11, 1), (43, 11, 4), (44, 11, 8), (45, 11, 4),
(46, 12, 1), (47, 12, 2), (48, 12, 3), (49, 12, 4),
(50, 13, 1), (51, 13, 2), (52, 13, 3), (53, 13, 4),
(54, 14, 1), (55, 14, 2), (56, 14, 6), (57, 14, 4),
(58, 15, 1), (59, 15, 2), (60, 15, 5), (61, 15, 4),
(62, 16, 1), (63, 16, 2), (64, 16, 10), (65, 16, 4),
(66, 17, 1), (67, 17, 2), (68, 17, 9), (69, 17, 4),
(70, 18, 1), (71, 18, 2), (72, 18, 3), (73, 18, 4),
(74, 19, 1), (75, 19, 4), (76, 19, 8), (77, 19, 4),
(78, 20, 1), (79, 20, 2), (80, 20, 3), (81, 20, 4),
(82, 21, 1), (83, 21, 2), (84, 21, 3), (85, 21, 4),
(86, 22, 1), (87, 22, 2), (88, 22, 6), (89, 22, 4),
(90, 23, 1), (91, 23, 2), (92, 23, 5), (93, 23, 4),
(94, 24, 1), (95, 24, 2), (96, 24, 10), (97, 24, 4),
(98, 25, 1), (99, 25, 2), (100, 25, 9), (101, 25, 4),
(102, 26, 1), (103, 26, 2), (104, 26, 9), (105, 26, 4),
(106, 27, 1), (107, 27, 2), (108, 27, 9), (109, 27, 4),
(110, 28, 1), (111, 28, 2), (112, 28, 9), (113, 28, 4);


INSERT INTO product_size
(id, product_id, size_id)
VALUES 
(1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (5, 1, 5),
(6, 2, 1), (7, 2, 2), (8, 2, 3), (9, 2, 4),
(10, 3, 1), (11, 3, 4), (12, 3, 8), (13, 3, 4),
(14, 4, 1), (15, 4, 2), (16, 4, 3), (17, 4, 4),
(18, 5, 1), (19, 5, 2), (20, 5, 3), (21, 5, 4),
(22, 6, 1), (23, 6, 2), (24, 6, 6), (25, 6, 4),
(26, 7, 1), (27, 7, 2), (28, 7, 5), (29, 7, 4),
(30, 8, 1), (31, 8, 2), (32, 8, 10), (33, 8, 4),
(34, 9, 1), (35, 9, 2), (36, 9, 9), (37, 9, 4),
(38, 10, 1), (39, 10, 2), (40, 10, 3), (41, 10, 4),
(42, 11, 1), (43, 11, 4), (44, 11, 8), (45, 11, 4),
(46, 12, 1), (47, 12, 2), (48, 12, 3), (49, 12, 4),
(50, 13, 1), (51, 13, 2), (52, 13, 3), (53, 13, 4),
(54, 14, 1), (55, 14, 2), (56, 14, 6), (57, 14, 4),
(58, 15, 1), (59, 15, 2), (60, 15, 5), (61, 15, 4),
(62, 16, 1), (63, 16, 2), (64, 16, 10), (65, 16, 4),
(66, 17, 1), (67, 17, 2), (68, 17, 9), (69, 17, 4),
(70, 18, 1), (71, 18, 2), (72, 18, 3), (73, 18, 4),
(74, 19, 1), (75, 19, 4), (76, 19, 8), (77, 19, 4),
(78, 20, 1), (79, 20, 2), (80, 20, 3), (81, 20, 4),
(82, 21, 1), (83, 21, 2), (84, 21, 3), (85, 21, 4),
(86, 22, 1), (87, 22, 2), (88, 22, 6), (89, 22, 4),
(90, 23, 1), (91, 23, 2), (92, 23, 5), (93, 23, 4),
(94, 24, 1), (95, 24, 2), (96, 24, 10), (97, 24, 4),
(98, 25, 1), (99, 25, 2), (100, 25, 9), (101, 25, 4),
(102, 26, 1), (103, 26, 2), (104, 26, 9), (105, 26, 4),
(106, 27, 1), (107, 27, 2), (108, 27, 9), (109, 27, 4),
(110, 28, 1), (111, 28, 2), (112, 28, 9), (113, 28, 4);

INSERT INTO sizes
(id,number)
VALUES (1,35),(2,36),(3,37),(4,38),(5,39),(6,40),(7,41),(8,42),(9,43),(10,44);

INSERT INTO shoesmarket.products
(id, name, price, dues, discount, stock, description, large_description, upper, cover, sole, origin, brand_id, image)
VALUES
(1, 'ZAPATILLAS RUNNING NIKE AIR ZOOM PEGASUS 39', 209999, 3, 20, 23, 'Que tus pies te lleven a nuevos lugares con Nike.', 'El running es tu ritual diario, y cada pisada te acerca a tus objetivos personales.Las NIKE Air Zoom Pegasus 39 te hacen llegar a nuevas alturas al entrenar y correr con su diseño intuitivo. Son más ligeras en la parte superior que las Pegasus 38 e ideales para cualquier temporada, ofrecen sujeción y contención, y la amortiguación de la planta del pie combinada con unidades Zoom Air dobles (1 más que en las Peg 38) aportan un toque adicional a cada pisada. Vuelve un modelo todoterreno con alas.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Argentina', 2, 'img-related-1.jpg'),

(2, 'ZAPATILLAS RUNNING NIKE AIR ZOOM PEGASUS 35', 199999, 3, 0, 20, 'Que tus pies te lleven a nuevos lugares con Nike.', 'El running es tu ritual diario, y cada pisada te acerca a tus objetivos personales.Las NIKE Air Zoom Pegasus 39 te hacen llegar a nuevas alturas al entrenar y correr con su diseño intuitivo. Son más ligeras en la parte superior que las Pegasus 38 e ideales para cualquier temporada, ofrecen sujeción y contención, y la amortiguación de la planta del pie combinada con unidades Zoom Air dobles (1 más que en las Peg 38) aportan un toque adicional a cada pisada. Vuelve un modelo todoterreno con alas.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Argentina', 2, 'img-related-2.jpg'),

(3, 'ZAPATILLAS RUNNING ADIDAS ULTRABOUNCE', 79999, 3, 15, 33, 'Que tus pies te lleven a nuevos lugares con Adidas.', 'Hacen lo que tienen que hacer y se ven bien haciéndolo. Estas zapatillas de running ADIDAS incorporan amortiguación LIGHTMOTION y un exterior abrigador para que siempre estés listo para correr o entrenar, incluso cuando baja la temperatura. Hecho con una serie de materiales reciclados, el exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Italia', 1, 'img-related-3.jpg'),

(4, 'ZAPATILLAS RUNNING ADIDAS DURAMO PROTECT', 61749, 3, 0, 0, 'Que tus pies te lleven a nuevos lugares con Adidas.', 'Hacen lo que tienen que hacer y se ven bien haciéndolo. Estas zapatillas de running ADIDAS incorporan amortiguación LIGHTMOTION y un exterior abrigador para que siempre estés listo para correr o entrenar, incluso cuando baja la temperatura. Hecho con una serie de materiales reciclados, el exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Indonesia', 1, 'img-related-4.jpg'),

(5, 'ZAPATILLAS ATOMIK TOUT', 56499, 3, 25, 10, 'Que tus pies te lleven a nuevos lugares con Atomik.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Argentina', 3, 'img-related-5.jpg'),

(6, 'ATOMIK 34-2', 55000, 3, 0, 35, 'Que tus pies te lleven a nuevos lugares con Atomik.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Uruguay', 3, 'img-related-6.jpg'),

(7, 'Zapatillas DC Shoes Pure', 133000, 3, 20, 30, 'Que tus pies te lleven a nuevos lugares con DC.',  'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'China', 5, 'img-related-7.jpg'),

(8, 'Zapatilla Dc Shoes Striker SS', 104999, 5, 0, 0, 'Que tus pies te lleven a nuevos lugares con DC.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 5, 'img-related-8.jpg'),

(9, 'ZAPATILLAS ENTRENAMIENTO FILA FORCE', 56490, 3, 20, 50, 'Que tus pies te lleven a nuevos lugares con FILA.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 6, 'img-related-9.jpg'),

(10, 'ZAPATILLAS RUNNING FILA FORCE', 59999, 3, 0, 50, 'Que tus pies te lleven a nuevos lugares con FILA.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 6, 'img-related-10.jpg'),

(11, 'JAGUAR CLASSIC F0', 175000, 3, 20, 50, 'Que tus pies te lleven a nuevos lugares con Jaguar.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 7, 'img-related-11.jpg'),

(12, 'Zapatillas Jaguar Oficial Art', 43700, 3, 0, 50, 'Que tus pies te lleven a nuevos lugares con Jaguar.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 7, 'img-related-12.jpg'),

(13, 'BOTAS JOHN FOOS PATH', 85000, 3, 20, 50, 'Que tus pies te lleven a nuevos lugares con John Foos.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 8, 'img-related-13.jpg'),

(14, 'BOTAS JOHN FOOS CLASSIC', 72900, 3, 0, 50, 'Que tus pies te lleven a nuevos lugares con John Foos.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'España', 8, 'img-related-14.jpg'),

(15, 'ZAPATILLAS KAPPA LOGO ALEM', 47040, 3, 20, 50, 'Que tus pies te lleven a nuevos lugares con Kappa.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Argentina', 9, 'img-related-15.jpg'),

(16, 'ZAPATILLAS KAPPA F9', 200000, 3, 15, 50, 'Que tus pies te lleven a nuevos lugares con Nike.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Estados Unidos', 9, 'img-related-16.jpg'),

(17, 'ZAPATILLAS NEW BALANCE COURT VICTORY', 179999, 3, 0, 33, 'Que tus pies te lleven a nuevos lugares con Puma.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Alemania', 10, 'img-related-17.jpg'),

(18, 'ZAPATILLAS NEW BALANCE GROW', 39499, 3, 0, 0, 'Que tus pies te lleven a nuevos lugares con Fila.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Italia', 10, 'img-related-18.jpg'),

(19, 'ZAPATILLAS PUMA G9', 91799, 3, 0, 0, 'Que tus pies te lleven a nuevos lugares con DC.', 'En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.', 'Téxtil, Poliéster, Cuero Vacuno Descarne', 'Téxtil, Poliéster', 'Goma', 'Estados Unidos', 11, 'img-related-19.jpg'),

(20, "APATILLAS RUNNING PUMA COMET 2 ALT BETA", 31999, 3, 0, 50, "Que tus pies te lleven a nuevos lugares con Puma.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 11, "img-related-20.jpg"),

(21, "ZAPATILLAS ENTRENAMIENTO REEBOK NFX", 55999, 3, 20, 50, "Que tus pies te lleven a nuevos lugares con Reebok.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 12, "img-related-21.jpg"),

(22, "ZAPATILLAS RUNNING REEBOK NFX", 88000, 3, 0, 50, "Que tus pies te lleven a nuevos lugares con Reebok.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 12, "img-related-22.jpg"),

(23, "ZAPATILLAS TOPPER DAKOTA", 65600, 3, 20, 50, "Que tus pies te lleven a nuevos lugares con Topper.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 13, "img-related-23.jpg"),

(24, "ZAPATILLAS TOPPER COSTA II", 56000, 3, 0, 50, "Que tus pies te lleven a nuevos lugares con Topper.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 13, "img-related-24.jpg"),

(25, "ZAPATILLAS WILSON HURAKN", 239000, 3, 20, 50, "Que tus pies te lleven a nuevos lugares con Wilson.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 14, "img-related-25.jpg"),

(26, "ZAPATILLAS WILSON GAME", 205000, 3, 0, 50, "Que tus pies te lleven a nuevos lugares con Wilson.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 14, "img-related-26.jpg"),

(27, "BOTAS CONVERSE CHUCK TAYLOR ALL STAR CORE HI", 90000, 3, 20, 50, "Que tus pies te lleven a nuevos lugares con Converse.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 4, "img-related-27.jpg"),

(28, "ZAPATILLA CONVERSE CHUCK TAYLOR ALL STAR PLATFORM OX", 103000, 3, 0, 50, "Que tus pies te lleven a nuevos lugares con Converse.", "En Shoes Market contamos con todo lo que necesitan tus pies para llevarte a tus lugares favoritos. Consideramos que la calidad es esencial, pero también lo es tu comodidad. Disfruta de algo tan simple como caminar acompañado del calzado perfecto. Las mejores marcas, calidad, comodidad y precio al alcance de tu click.", "Téxtil, Poliéster, Cuero Vacuno Descarne","Téxtil, Poliéster", "Goma", "España", 4, "img-related-28.jpg");



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
