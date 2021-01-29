import React from 'react'
import '../components/template-navbar.css';

const  Profile = ({datos_alumno})=> {
    return (
        <>
            <div className="container">   
            <h4>PERFIL DEL ALUMNO</h4><hr/>
                <div class="card" >                        
                    <div class="card-header card-head">
                        DATOS DEL ALUMNO
                    </div>
                    <div class="card-body row">
                        
                        <div className="col-md-6">
                        <div class="form-group cards row">
                                <label class="col-form-label col-5 col-md-4"><strong>Apellidos</strong></label>
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.apellido}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Nombre(s)</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.nombre}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Nivel</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.nivel}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Año</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.anio}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Correo institucional</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.correo_institucional}</span>
                                </div>
                            </div>
                        </div>
                        
                                                  
                    </div>												
                </div>
                <div class="card" >                        
                    <div class="card-header card-head">
                        DATOS PERSONALES
                    </div>
                    <div class="card-body row">
                        
                        <div className="col-md-6">
                        <div class="form-group cards row">
                                <label class="col-form-label col-5 col-md-4"><strong>Fecha de nacimiento</strong></label>
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.fech_nacimiento}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>DNI</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.dni}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Edad</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.edad}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Sexo</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.sexo}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Tipo de sangre</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.tipo_sangre}</span>
                                </div>
                            </div>
                        </div>                                                                          
                    </div>												
                </div>
                <div class="card" >                        
                    <div class="card-header card-head">
                        DATOS DE UBICACIÓN Y CONTACTO ACTUAL
                    </div>
                    <div class="card-body row">
                        
                        <div className="col-md-6">
                        <div class="form-group cards row">
                                <label class="col-form-label col-5 col-md-4"><strong>Domicilio</strong></label>
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.direccion}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Correo personal</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.correo_personal}</span>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="col-md-6">
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Teléfono fijo</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.telf_fijo}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Teléfono móvil</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.telf_pers}</span>
                                </div>
                            </div>

                        </div>                                                                          
                    </div>												
                </div>
                <div class="card" >                        
                    <div class="card-header card-head">
                        DATOS DE PROCEDENCIA
                    </div>
                    <div class="card-body row">
                        
                        <div className="col-md-6">
                        <div class="form-group cards cards row">
                                <label class="col-form-label col-5 col-md-4"><strong>País</strong></label>
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.pais}</span>
                                </div>
                            </div>
                            <div class="form-group cards cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Provincia</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.provincia}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Domicilio de procedencia</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.domicilio_procedencia}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Departamento</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.departamento}</span>
                                </div>
                            </div>
                            <div class="form-group cards row">												
                                <label class="col-form-label col-5 col-md-4"><strong>Distrito</strong></label>												
                                <div class="col-form-label col-7 col-md-8">
                                    <span>{datos_alumno.distrito}</span>
                                </div>
                            </div>
                        </div>                                                                          
                    </div>												
                </div>				
            </div> 
        </>
    )
}

export default Profile
