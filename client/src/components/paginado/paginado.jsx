import React from 'react'
import style from '../paginado/paginado.module.css'
export default function Paginado({ dogsPerPage, perros, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(perros / dogsPerPage); i++) {
        pageNumbers.push(i)

    }




    return (
        <div className={style.test} >
            <nav>
               
                <ul >
                    {pageNumbers && pageNumbers.map((el) => {
                        return (<li className={style.paginado} key= {el} >


                            <button  onClick={() => paginado(el)}>{el}</button>
                            




                            </li> )
                       
                      

                    })}

                </ul>

            </nav>



        </div>
    )
}
