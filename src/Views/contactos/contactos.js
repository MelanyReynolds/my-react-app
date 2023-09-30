import React from "react";
import './contactos.css'

const personajes = [
  {
    "nombre": "Marie Curie",
    "apodo": "Pionera de la Radiactividad",
    "imagen_url": "https://i.pinimg.com/736x/4d/21/bd/4d21bd4dce69a42d226effa8e1e2ab8c.jpg",
    "ocupacion": "Física y Química",
    "nacionalidad": "Polaca",
    "fecha_nacimiento": "7 de noviembre de 1867",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Marie_Curie"
  },
  {
    "nombre": "Rosalind Franklin",
    "apodo": "La Dama del ADN",
    "imagen_url": "https://ejemplo.com/rosalind_franklin.jpg",
    "ocupacion": "Biofísica y Cristalografía de rayos X",
    "nacionalidad": "Británica",
    "fecha_nacimiento": "25 de julio de 1920",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Rosalind_Franklin"
  },
  {
    "nombre": "Jane Goodall",
    "apodo": "La Dama de los Chimpancés",
    "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWtIy_u6kDfTTsypMlY23_3LOZV9V2ZnaZpv9wWfSjEoA9xhYcERhTuJ4bXfBEyDH-Dc&usqp=CAU",
    "ocupacion": "Primatóloga y Etóloga",
    "nacionalidad": "Británica",
    "fecha_nacimiento": "3 de abril de 1934",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Jane_Goodall"
  },
  {
    "nombre": "Barbara McClintock",
    "apodo": "La Maestra de los Genes Saltarines",
    "imagen_url": "https://ejemplo.com/barbara_mcclintock.jpg",
    "ocupacion": "Genetista",
    "nacionalidad": "Estadounidense",
    "fecha_nacimiento": "16 de junio de 1902",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Barbara_McClintock"
  },
  {
    "nombre": "Ada Lovelace",
    "apodo": "Primera Programadora",
    "imagen_url": "https://ejemplo.com/ada_lovelace.jpg",
    "ocupacion": "Matemática y Escritora",
    "nacionalidad": "Británica",
    "fecha_nacimiento": "10 de diciembre de 1815",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Ada_Lovelace"
  },
  {
    "nombre": "Emmy Noether",
    "apodo": "Madre de la Matemática Moderna",
    "imagen_url": "https://ejemplo.com/emmy_noether.jpg",
    "ocupacion": "Matemática",
    "nacionalidad": "Alemana",
    "fecha_nacimiento": "23 de marzo de 1882",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Emmy_Noether"
  },
  {
    "nombre": "Chien-Shiung Wu",
    "apodo": "La Reina de la Física Experimental",
    "imagen_url": "https://ejemplo.com/chien_shiung_wu.jpg",
    "ocupacion": "Física Experimental",
    "nacionalidad": "China",
    "fecha_nacimiento": "29 de mayo de 1912",
    "wikipedia_url": "https://es.wikipedia.org/wiki/Chien-Shiung_Wu"
  }
]

export default function ContactosView() {

  return(
    <div className="contenedor">

      {
        personajes.map((personaje) => (
          <div className="tarjeta-personaje" >

            <div classsName='lado-izquierdo'>
              <img className="personaje-imagen"  src={personaje.imagen_url}/>
            </div>

            <div classsName='lado-derecho'>
              <p className='personaje-nombre' > { personaje.nombre } </p>

              <div className="contenedor-fecha-nacionalidad">
                <p className='personaje-nacionalidad' > { personaje.nacionalidad } </p>
                <p className='personaje-fecha' > { personaje.fecha_nacimiento } </p>
              </div>

              <p className='personaje-apodo' > { personaje.apodo } </p>
              <p className='personaje-ocupacion' > { personaje.ocupacion } </p>

              <a href={personaje.wikipedia_url} target='_blank' >
                Wikipedia
              </a>
            </div>
          </div>
        ))
      }

    </div>
  )
}

