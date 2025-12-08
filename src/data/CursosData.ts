import { act } from "react";
import { Link } from "react-router";

const Cursos=[
    {
        nombre:"Matemática",
        slug:"matematica",
        materiales:["livro de ejercicios","video clases","apuntes"],
        docente:"Juan Perez",
        linkClaseVirtual:"https://zoom.us/j/123456789",
        actividades:[
            {
                titulo:"Ejercicio 1",
                descripcion:"Resolver los ejercicios del 1 al 10",
                fechaEntrega:"2024-07-10",
                link:"https://drive.google.com/ejercicio1",
                tipo:"tarea",
            }],
    }
]