export const columnsTutor = [
    { field: 'name', headerName: 'Nombre/s', width: 150 ,},
    { field: 'lastname', headerName: 'Apellido', width: 150,},
    { field: 'dni', headerName: 'DNI', width:160 ,},
    { field: 'email',headerName: 'Correo Electrónico', type: 'email', width: 250, },
    { field: 'telephone', headerName: 'Teléfono', type: 'number', width: 150, },
    { field: 'link', headerName: 'Link', width: 150, 
        renderCell: (params) => {
            return <div>{params.value}</div>
        },
    },
		{field:'carreras', headerName:'Carreras', width: 150},
    {field: 'type', headerName: 'Tipo', width: 150, }
]


export const columnsTutorShort = [
    { field: 'name', headerName: 'Nombre/s', width: 160 ,},
    { field: 'lastname', headerName: 'Apellido', width: 160,},
    { field: 'dni', headerName: 'DNI', width:160 ,},
]

export const actividadesRows = [
	{ headerName: 'Nombre', field: 'name' },
	{ headerName: 'Apellido', field: 'lastname' },
	{ headerName: 'Correo Electrónico', field: 'email' },
	{ headerName: 'Teléfono', field: 'telephone' },
	{ headerName: 'Carrera', field: 'carreras' },
	{ headerName: 'Estado', field: 'actualState' },
	{ field: 'profile', headerName: 'Perfil', width: 150, 
			renderCell: (params) => {
					return <div>{params.value}</div>
			},
  },
	{ headerName: 'Eliminar', field: 'delete', width: 150, 
		renderCell: (params) => {
				return <div>{params.value}</div>
		},
},
]