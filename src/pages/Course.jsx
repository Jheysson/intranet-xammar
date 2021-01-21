import React from 'react'

const Course = () => {

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
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th><center>CODIGO</center></th>
                        <th><center>CURSO</center></th>
                        <th><center>DOCENTE A CARGO</center></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cursos.map((item, index) =>{
                                return(
                                    <tr>
                                        <td><center>{item.codigo}</center></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.docente_cargo}</td>
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
 
export default Course;

