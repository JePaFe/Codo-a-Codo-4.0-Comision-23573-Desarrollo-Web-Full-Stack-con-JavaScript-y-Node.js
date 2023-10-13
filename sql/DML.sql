INSERT INTO `usuarios`(`id`, `usuario`, `nombre`, `apellido`, `edad`) 
VALUES (null, 'User 1', 'Juan', null, 33);

INSERT INTO `usuarios`(`id`, `usuario`, `nombre`, `apellido`, `edad`) 
VALUES (null, 'User 2', 'Pedro', null, 20), (9, 'User 3', 'Maria', 'Perez', 30);

INSERT INTO `usuarios`(`usuario`, `nombre`, `edad`) 
VALUES ('User 4', 'Ana', 23);

INSERT INTO `usuarios` VALUES (null, 'User 9', 'Nueve', null, 33);

---

SELECT * FROM `usuarios`;

SELECT id, usuario, edad FROM `usuarios`;

SELECT id, usuario, edad 
FROM `usuarios`
WHERE edad >= 30;

SELECT * 
FROM `usuarios`
LIMIT 2;

SELECT * 
FROM `usuarios`
ORDER BY edad DESC;

---

UPDATE `usuarios` 
SET apellido = 'Garcia', edad = 21
WHERE id = 3;

UPDATE `usuarios` 
SET apellido = 'Sin apellido'
WHERE apellido IS NULL;

---

