import {create} from 'zustand'
import {getMyCoursesRequest,getCatalogoRequest,getProfileRequest} from '../api/alumnoApi'
import { useAuthStore } from './useAuthStore'
import type {Alumno} from '../type/Alumno'
import type {Curso2 as Curso} from '../type/Curso'
import type { CourseContentResponse } from '../type/CourseContent';
import { getCourseContentRequest } from '../api/alumnoApi'
interface AlumnoState{
    Profile:Alumno,
    cursos:Curso[],
    catalogo:Curso[],
    getCursos:()=>Promise<void>,
    getCatalogo:()=>Promise<void>,
    getProfile:()=>Promise<void>,
    loadingCurso:boolean,
    loadingCatalogo:boolean,
    loadingProfile:boolean,
    errorCurso:string|null,
    errorCatalogo:string|null,
    errorProfile:string|null,
    currentCourse: CourseContentResponse | null;
    loadingContent: boolean;
    getCourseContent: (id: number) => Promise<void>;
}

export const useAlumnoStore=create<AlumnoState>((set)=>({
    Profile:{
        Apellido:"",
        Correo:"",
        DNI:"",
        Nombre:"",
        Telefono:""
    },
    cursos:[],
    catalogo:[],
    loadingCurso:false,
    loadingCatalogo:false,
    loadingProfile:false,
    errorCurso:null,
    errorCatalogo:null,
    errorProfile:null,
    getCursos:async()=>{
        set({loadingCurso:true,errorCurso:null})
        try{
            const token = useAuthStore.getState().token;
            if (!token) throw new Error("No autenticado");

            const res=await getMyCoursesRequest()
            set({cursos:res.data.courses})
        }catch(error){
            set({
                errorCurso:
                  error instanceof Error ? error.message : "Error al obtener Curso",
            })
        }finally{
            set({loadingCurso:false})
        }
    },

    getCatalogo:async()=>{
        set({loadingCatalogo:true,errorCatalogo:null})
        try{
            const token = useAuthStore.getState().token;
            if (!token) throw new Error("No autenticado");
            const res=await getCatalogoRequest()
            set({catalogo:res.data.data})
        }catch(error){
            set({
                errorCatalogo:
                  error instanceof Error ? error.message : "Error al obtener Curso",
            })
        }finally{
            set({loadingCatalogo:false})
        }
    },
    getProfile:async()=>{
        set({loadingProfile:true,errorProfile:null})
        try{
            const token = useAuthStore.getState().token;
            if (!token) throw new Error("No autenticado");
            const res=await getProfileRequest()
            set({Profile:res.data.data})
        }catch(error){
            set({
                errorProfile:
                  error instanceof Error ? error.message : "Error al obtener profile",
            })
        }finally{
            set({loadingProfile:false})
        }
    },
    currentCourse: null,
    loadingContent: false,

    // 👇 La función nueva
    getCourseContent: async (idCurso: number) => {
        set({ loadingContent: true, errorCurso: null }); // Reusamos o creamos un errorContent
        try {
            const token = useAuthStore.getState().token;
            if (!token) throw new Error("No autenticado");

            const res = await getCourseContentRequest(idCurso);
            console.log("📦 Respuesta API:", res.data); // <--- DEBUG 2
            set({ currentCourse: res.data.data }); // Guardamos la data
        } catch (error) {
            console.error(error);
            // Manejo de error opcional
        } finally {
            set({ loadingContent: false });
        }
    },
}));