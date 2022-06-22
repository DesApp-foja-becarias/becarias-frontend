export const columnsActivities = [
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