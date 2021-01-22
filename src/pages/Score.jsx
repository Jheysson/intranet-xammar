import React from 'react'

const Score = () => {

    const cursos = [
        {
            codigo: '241',
            nombre: 'Ciencia, Tecnología y Ambiente',
            docente_cargo: 'Nay Fredi Munayco Sánchez'
        },
        {
            codigo: '242',
            nombre: 'Historia del Perú',
            docente_cargo: 'Kent Roberto Peralta Castro'
        },
        {
            codigo: '243',
            nombre: 'Arte',
            docente_cargo: 'Angel Joshua Escalante Nonato '
        },
        {
            codigo: '244',
            nombre: 'Religion',
            docente_cargo: 'Brayan Fredi Borda Jimenez'
        },
        {
            codigo: '245',
            nombre: 'Persona, Familia y Relaciones Humanas',
            docente_cargo: 'Ariana Sánchez Castro'
        },
        {
            codigo: '246',
            nombre: 'Matemática',
            docente_cargo: 'Cristian Peralta Nonato'
        },

    ]
    return (
        <>
        <div className="container">
            
        <h4>NOTAS</h4><hr/>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th><center>CURSO</center></th>
                        <th><center>nota 1</center></th>
                        <th><center>nota 2</center></th>
                        <th><center>nota 3</center></th>
                        <th><center>Promedio 1</center></th>
                        <th><center>nota 2</center></th>
                        <th><center>nota 2</center></th>
                        <th><center>nota 2</center></th>
                        <th><center>Promedio 2</center></th>
                        <th><center>nota 3</center></th>
                        <th><center>nota 3</center></th>
                        <th><center>nota 3</center></th>
                        <th><center>Promedio 3</center></th>
                        <th><center>Promedio General</center></th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                        {
                            cursos.map((item, index) =>{
                                return(
                                    <tr>
                                        <td>{item.nombre}</td>
                                        <td><center>1</center></td>                                        
                                        <td><center>1</center></td>
                                        <td><center>1</center></td>
                                        <td><strong><center>3</center></strong></td>                                        
                                        <td><center>1</center></td>
                                        <td><center>1</center></td>
                                        <td><center>1</center></td>
                                        <td><strong><center>3</center></strong></td>    
                                        <td><center>1</center></td>
                                        <td><center>1</center></td>
                                        <td><center>1</center></td>
                                        <td><strong><center>3</center></strong></td>
                                        
                                        <td><strong><center>3</center></strong></td>  
                                        
                                    </tr>
                                )
                            })
                        }                
                </tbody>
            </table>
        </div>
        </>
    );
}
 
export default Score;