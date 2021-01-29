import React from 'react'

const Attendance = () => {
    return (
        <>
        <div className="container">
            
        <h4>Asistencia</h4><hr/>
        <form>
            <div className="form-group row">
                <div className="col-md-12">
                    <label className="col-form-label" >
                        <strong>Seleccione el aula</strong>
                    </label>
                    
                    </div>
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <div className="row">                            
                        <div className="col-md-3">                            
                            <label >Grado</label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-control" name="" id="">
                                <option value="">4to</option>
                                <option value="">5to</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="form-group col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <label className="col-form-label">Sección</label>            
                        </div>
                        <div className="col-md-9">
                            <select className="form-control" name="" id="">
                                <option value="">A</option>
                                <option value="">K</option>
                            </select>
                        </div>
                    </div>                
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary">Generar listado</button>
                </div>
            </div>
            
            

        </form>
        </div>
        </>
    );
}
 
export default Attendance;