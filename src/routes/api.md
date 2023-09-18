{
  "Paciente": [
    {
      "id": 1,
      "numIdentidadPa": 1234,
      "nombrePa": "Duvan Felipe",
      "apellidoPa": "Sanchez Leguizamon",
      "tipoDocumentoPa": "T.I",
      "numeroPa": 3138132399,
      "epsPa": "Famisanar",
      "GeneroPa": true,
      "email": "Duvan@gmail.com",
      "password": "81dc9bdb52d04dc20036dbd8313ed055"
    },
    {
      "id": 2,
      "numIdentidadPa": 12356,
      "nombrePa": "Camilo",
      "apellidoPa": "torres",
      "numeroPa": 324567890,
      "epsPa": "Famisanar",
      "GeneroPa": true,
      "email": "Camilo@gmail.com",
      "password": "827ccb0eea8a706c4c34a16891f84e7b"
    },
    {
      "nombrePa": "hola",
      "apellidoPa": "hola",
      "numIdentificacionPa": 12,
      "email": "hola@gmail.com",
      "password": "4d186321c1a7f0f354b297e8914ab240",
      "id": 3
    },
    {
      "nombrePa": "hola",
      "apellidoPa": "hola",
      "numIdentificacionPa": "1234",
      "email": "duvansanchezle@gmail.com",
      "numeroPa": "123456789",
      "password": "4d186321c1a7f0f354b297e8914ab240",
      "id": 4
    }
  ],
  "Medico": [
    {
      "numIdentidadDoc": 1234,
      "nombreDoc": "Andres",
      "apellidoDoc": "Cordoba",
      "numeroDoc": 1234,
      "espacializacion": "odontologo",
      "disponibilidadDoc": true
    },
    {
      "numIdentidadDoc": 123,
      "nombreDoc": "Kevin",
      "apellidoDoc": "Mora",
      "numeroDoc": 12354,
      "especializacionDoc": "cirujano",
      "disponibilidadDoc": false
    }
  ],
  "Solicitud": [
    {
      "id": 1,
      "fechaSoli": "2023-08-21T10:30:OOZ",
      "PacienteFk": 1234,
      "disponibilidadSoli": true,
      "docFk": 1234
    },
    {
      "id": 2,
      "fechaSoli": "2023-08-31T10:30:OOZ",
      "PacienteFk": 12356,
      "disponibilidadSoli": false,
      "docFk": 123
    }
  ]
}