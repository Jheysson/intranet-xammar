import React from 'react'

function Profile({datos_alumno}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row">
                        Perfil del alumno
                    </div>
                    <div className="row" style={{backgroundColor: '#C6FFD3'}}>
                        <div className="col-md-12">
                            <label>
                                Nombre
                            </label>
                            <span>{datos_alumno.nombre}</span>
                        </div>                        
                    </div>
                    <div class="card border-dark mb-3" >
                        <div class="card-header">
                            Datos del alumno
                        </div>
                        <div class="card-body text-secondary">
                            <div class="form-group row">												
                                <label class="col-form-label col-md-5">Nombre</label>												
                                <div class="col-7">
                                    <span>{datos_alumno.nombre}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-md-5">Apellido</label>
                                <div class="col-7">
                                    <span>{datos_alumno.apellido}</span>
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
