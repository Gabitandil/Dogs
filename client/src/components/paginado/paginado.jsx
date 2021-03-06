import React from 'react'
import style from '../paginado/paginado.module.css'
export default function Paginado({ dogsPerPage, perros, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(perros / dogsPerPage); i++) {
        pageNumbers.push(i)

    }




    return (
        <div className={style.position} >
            <nav>
               
                <ul >
                    {pageNumbers && pageNumbers.map((el) => {
                        return (<li className={style.paginado} key= {el} >
                            

                            <a  className={style.anchor}  onClick={() => paginado(el)}>{el}</a>
                            




                            </li> )
                       
                      

                    })}

                </ul>

            </nav>



        </div>
    )
}
