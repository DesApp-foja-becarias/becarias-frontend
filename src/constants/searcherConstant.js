export const columnsTutor = [
    { field: 'id', headerName: 'ID', width: 50, },
    { field: 'name', headerName: 'Nombre/s', width: 150 ,},
    { field: 'lastname', headerName: 'Apellido', width: 150,},
    { field: 'dni', headerName: 'DNI', width:160 ,},
    { field: 'email',headerName: 'Correo Electronico', type: 'email', width: 250, },
    { field: 'telephone', headerName: 'Telefono', type: 'number', width: 150, },
    { field: 'link', headerName: 'Link', width: 150, 
        renderCell: (params) => {
            return <div>{params.value}</div>
        },
    },
    {field: 'type', headerName: 'Tipo', width: 150, }
]

export const actividadesRows = [
	{ headerName: 'Nombre', field: 'name' },
	{ headerName: 'Apellido', field: 'lastname' },
	{ headerName: 'Correo', field: 'email' },
	{ headerName: 'Telefono', field: 'telephone' },
	{ headerName: 'Carrera', field: 'career' },
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