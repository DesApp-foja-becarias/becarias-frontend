export const columnsActivities = [
    { field: 'id', headerName: 'ID', width: 50, },
    { field: 'name', headerName: 'Nombre', width: 300,},
    { field: 'startDate', headerName: 'Fecha de inicio', width: 200,},
    { field: 'endDate', headerName: 'Fecha de finalización estimada', width:200 ,},
    { field: 'validity',headerName: 'Vigencia', type: 'email', width: 180, },
    { field: 'link', headerName: 'Link', width: 150, 
        renderCell: (params) => {
            return <div>{params.value}</div>
        },
    },
]


export const rowss = [
    { id: 1, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
    { id: 2, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 3, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 4, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 5, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 6, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 7, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 8, name: "Alumno asistente", startDate: "11/09/2021", endDate: "-", validity: "Vigente" },
    { id: 9, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
    { id: 10, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
    { id: 11, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
    { id: 12, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
    { id: 13, name: "1 estudiante - 1 compañero", startDate: "11/09/2021", endDate: "16/09/2021", validity: "Finalizada" },
];