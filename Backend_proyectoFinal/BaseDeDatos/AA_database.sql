create database bd_proyectofinal;

use bd_proyectofinal;

create table imagenes (
    id int auto_increment primary key,
    ruta varchar(10000)
);

create table  logos (
    id int auto_increment primary key,
    ruta varchar(10000)
);


create table comentarios (
    id int auto_increment primary key,
    nombre varchar(100),
    valoracion int,
    foreign key (id_imagen) references imagenes(id),
    foreign key (id_logo) references logos(id)
);


insert into imagenes (ruta) values ('ruta_de_imagen_1');
insert into imagenes (ruta) values ('ruta_de_imagen_2');
insert into imagenes (ruta) values ('ruta_de_imagen_3');


insert into logos (ruta) values ('ruta_de_logo_1');
insert into logos (ruta) values ('ruta_de_logo_2');
insert into logos (ruta) values ('ruta_de_logo_3');


insert into comentarios (nombre, valoracion) values ('Alejandro Rodríguez Castro', 5);
insert into comentarios (nombre, valoracion) values ('Carlos Manuel Pazos Sánchez', 4);
insert into comentarios (nombre, valoracion) values ('Ainara Vazquez Teijo', 3);