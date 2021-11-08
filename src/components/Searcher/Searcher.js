import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getTutors } from '../../services/Tutor/serviceTutor'
import { Link } from 'react-router-dom';

const columnsScholar = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'firstName',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Apellido',
    width: 150,
    editable: true,
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width:160,
    editable:true,
  },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'state',
    headerName: 'Estado',
    //description: 'This column has a value getter and is not sortable.',
    //sortable: false,
    width: 150,
    /*valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,*/
  },
  {field: 'career',headerName: 'Carrera',width: 150,editable: true,},
  {field: 'announcement',headerName: 'Convocatoria',type: 'number',width: 180,editable: true,},
  {field: 'weighing',headerName: 'Ponderación',type: 'number',width: 180,editable: true,},
  {field: 'tutor',headerName: 'Tutor',width: 150,editable: true,}

]



const columnsTutor = [
  { field: 'id', headerName: 'ID', width: 50, },
  { field: 'name', headerName: 'Nombre/s', width: 150 ,},
  { field: 'surname', headerName: 'Apellido', width: 150,},
  { field: 'dni', headerName: 'DNI', width:160 ,},
  { field: 'email',headerName: 'Correo Electronico', type: 'email', width: 250, },
  { field: 'telephone', headerName: 'Telefono', type: 'number', width: 150, },
  { field: 'link', headerName: 'Link', width: 150,},
]

const rows = [
  { id: 1, lastName: 'Fabiola', firstName: 'Suarez', dni: "42.312.342" ,age: 35 , state: 'Aceptada',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 2, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Rechazada',career: " Tec. en Informática",announcement: 2020,weighing: 2021,tutor: "Sabrina Schiaretti"},
  { id: 3, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 21 , state: 'En espera',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Alicia Ramos"},
  { id: 4, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 35 , state: 'Rechazada',career: " Tec. en Informática",announcement: 2020,weighing: 2021,tutor: "Alicia Ramos"},
  { id: 5, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Analizandose',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 7, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'En espera',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 8, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Rechazada',career: " Tec. en Informática",announcement: 2020,weighing: 2021,tutor: "Alicia Ramos"},
  { id: 9, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Rechazada',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 10, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Aceptada',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 11, lastName: 'Fabiola', firstName: 'Suarez', dni: "42.312.342" ,age: 35 , state: 'Aceptada',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 12, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Rechazada',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 13, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 21 , state: 'Rechazada',career: " Tec. en Electrónica",announcement: 2020,weighing: 2021,tutor: "Alicia Ramos"},
  { id: 14, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 35 , state: 'Rechazada',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 15, lastName: 'Carol', firstName: 'Suris', dni: "37.659.881" ,age: 25 , state: 'Analizandose',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 17, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Aceptada',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Alicia Ramos"},
  { id: 18, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Aceptada',career: " Tec. en Informática",announcement: 2019,weighing: 2020,tutor: "Sabrina Schiaretti"},
  { id: 19, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'En espera',career: " Tec. en Informática",announcement: 2020,weighing: 2021,tutor: "Alicia Ramos"},
  { id: 20, lastName: 'Carol', firstName: 'Suris', dni: "12.345.678" ,age: 25 , state: 'Rechazada',career: " Tec. en Electrónica",announcement: 2019,weighing: 2020,tutor: "Alicia Ramos"}

];

export default function Searcher() {
  const [tutors, setTutors] = useState()

  const mapTutors = (tutores) => {
    tutores.map(tutor => {
      return (
        {
        id: tutor.id,
        name: tutor.name,
        surname: tutor.surname,
        dni: tutor.dni,
        email: tutor.email,
        telephone: tutor.telephone,
        address: tutor.address,
        link: <Link to={`/tutor/${tutor.id}`}>Ver</Link>,
        })
    })
  }
    
/*
  useEffect(() => {
    const fetchData = async () => {
      await getTutors().then(res => {
      console.log(mapTutors(res.data)) 
      setTutors(res.data)
      })
    }
    fetchData();
  
  }, [tutors])
  */
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columnsTutor}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}