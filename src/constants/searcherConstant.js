export const columnsTutor = [
    { field: 'id', headerName: 'ID', width: 50, },
    { field: 'name', headerName: 'Nombre/s', width: 150 ,},
    { field: 'lastname', headerName: 'Apellido', width: 150,},
    { field: 'dni', headerName: 'DNI', width:160 ,},
    { field: 'email',headerName: 'Correo Electronico', type: 'email', width: 250, },
    { field: 'telephone', headerName: 'Telefono', type: 'number', width: 150, },
    { field: 'link', headerName: 'Link', width: 150, renderCell: (params) => {
        return <div>{params.value}</div>
    }
    },
]


const rowss = [
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