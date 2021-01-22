import React, {useState} from 'react'
import '../components/NavbarStyles.css'
import '../components/template-navbar.css'

const Schedule = () => {

    const [checkCTA, setCheckCTA] = useState(false);
    const [checkHistoria, setCheckHistoria] = useState(false)
    const [checkArte, setCheckArte] = useState(false)
    const [checkReligion, setCheckReligion] = useState(false)
    const [checkPFRH, setCheckPFRH] = useState(false)
    const [checkMatematica, setCheckMatematica] = useState(false)

    const functions = [
         checkCTAFunction  => setCheckCTA(!checkCTA),
         checkHistoriaFunction => setCheckHistoria(!checkHistoria),
         checkArteFunction => setCheckArte(!checkArte),
         checkReligionFunction => setCheckReligion(!checkReligion),
         checkPFRHFunction => setCheckPFRH(!checkPFRH),
         checkMatematicaFunction => setCheckMatematica(!checkMatematica)

    ]
    

    const cursos = [
        {
            codigo: '241',
            nombre: 'Ciencia, Tecnología y Ambiente',
            acronimo: 'CTA',
            docente_cargo: 'Nay Fredi Munayco Sánchez',
            color: '#c1ff69',
            const : checkCTA
        },
        {
            codigo: '242',
            nombre: 'Historia del Perú',            
            acronimo: 'H. del Perú',
            docente_cargo: 'Kent Roberto Peralta Castro',
            color: '#FF6633',
            const: checkHistoria
        },
        {
            codigo: '243',
            nombre: 'Arte',
            acronimo: 'Arte',
            docente_cargo: 'Angel Joshua Escalante Nonato ',
            color: 'gray',
            const: checkArte
        },
        {
            codigo: '244',
            nombre: 'Religion',
            acronimo: 'Religion',
            docente_cargo: 'Brayan Fredi Borda Jimenez',
            color: '#6719e3',
            const: checkReligion
        },
        {
            codigo: '245',
            nombre: 'Persona, Familia y Relaciones Humanas',
            acronimo: 'P. H. R. F',
            docente_cargo: 'Ariana Sánchez Castro',
            color: '#1997e3',
            const: checkPFRH
        },
        {
            codigo: '246',
            nombre: 'Matemática',
            acronimo: 'Mate',
            docente_cargo: 'Cristian Peralta Nonato',
            color: 'yellow',
            const: checkMatematica
        },
        

    ]

    

    

    return (
        <>
        <div className="container">
            
        <h4>HORARIO</h4><hr/>
        <form>
            {
                
                cursos.map((item, index) => {
                    return(
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" onClick={functions[index]} for={item.codigo} style={{backgroundColor: cursos[index].color}}/>
                        <label class="form-check-label" >{item.nombre}</label>
                        <br/>
                        </div>
                    )
                })
            }
        </form>
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th><center>Hora</center></th>
                        <th><center>Lunes</center></th>
                        <th><center>Martes</center></th>
                        <th><center>Miércoles</center></th>
                        <th><center>Jueves</center></th>
                        <th><center>Viernes</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><center>13:00 - 13:45</center></td>
                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[3].const ? cursos[3].color: 'white',
                                    color: cursos[3].const ? 'white': 'black'}}
                             key={cursos[3].codigo}><center>{cursos[3].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>
                    </tr>
                    <tr>
                        <td><center>13:45 - 14:30</center></td>
                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[3].const ? cursos[3].color: 'white',
                                    color: cursos[3].const ? 'white': 'black'}}
                             key={cursos[3].codigo}><center>{cursos[3].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>
                    </tr>
                    <tr>
                        <td><center>14:30 - 15:15</center></td>
                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[3].const ? cursos[3].color: 'white',
                                    color: cursos[3].const ? 'white': 'black'}}
                             key={cursos[3].codigo}><center>{cursos[3].acronimo}</center></td>
                    </tr>
                    <tr>
                        <td><center>15:15 - 15:45</center></td>
                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[3].const ? cursos[3].color: 'white',
                                    color: cursos[3].const ? 'white': 'black'}}
                             key={cursos[3].codigo}><center>{cursos[3].acronimo}</center></td>
                    </tr>
                    <tr>
                        <td><center>15:45 - 16:05</center></td>
                        <td>
                            <center>
                                <h6>RECREO</h6>
                            </center>                        
                        </td>
                        <td>
                            <center>
                                <h6>RECREO</h6>
                            </center>                        
                        </td>
                        <td>
                            <center>
                                <h6>RECREO</h6>
                            </center>                        
                        </td>
                        <td>
                            <center>
                                <h6>RECREO</h6>
                            </center>                        
                        </td>
                        <td>
                            <center>
                                <h6>RECREO</h6>
                            </center>                        
                        </td>
                        
                    </tr>
                    <tr>
                        <td><center>16:05 - 16:50</center></td>
                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[3].const ? cursos[3].color: 'white',
                                    color: cursos[3].const ? 'white': 'black'}}
                             key={cursos[3].codigo}><center>{cursos[3].acronimo}</center></td>
                    </tr>
                    <tr>
                        <td><center>16:50 - 17:20</center></td>
                        
                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[2].const ? cursos[2].color: 'white',
                                    color: cursos[2].const ? 'white': 'black'}}
                             key={cursos[2].codigo}><center>{cursos[2].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>

                        
                    </tr>
                    <tr>
                        <td><center>17:20 - 18:05</center></td>
                        <td style={{ backgroundColor: cursos[5].const ? cursos[5].color: 'white'}}
                            key={cursos[5].codigo}><center>{cursos[5].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[2].const ? cursos[2].color: 'white',
                                    color: cursos[2].const ? 'white': 'black'}}
                             key={cursos[2].codigo}><center>{cursos[2].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[1].const ? cursos[1].color: 'white',
                                    color: cursos[1].const ? 'white': 'black'}}
                            key={cursos[1].codigo}><center>{cursos[1].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[0].const ? cursos[0].color: 'white'}}
                             key={cursos[0].codigo}><center>{cursos[0].acronimo}</center></td>

                        <td style={{ backgroundColor: cursos[4].const ? cursos[4].color: 'white',
                                    color: cursos[4].const ? 'white': 'black'}}
                            key={cursos[4].codigo}><center>{cursos[4].acronimo}</center></td>
                    </tr>
           
                </tbody>
            </table>
        </div>
        </>
    );
}
 
export default Schedule;