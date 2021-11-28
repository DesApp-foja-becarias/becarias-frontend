import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const columnsScholar = [
//   { field: 'id', headerName: 'ID', width: 50 },
//   {
//     field: 'firstName',
//     headerName: 'Nombre',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Apellido',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'dni',
//     headerName: 'DNI',
//     width:160,
//     editable:true,
//   },
//   {
//     field: 'age',
//     headerName: 'Edad',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'state',
//     headerName: 'Estado',
//     //description: 'This column has a value getter and is not sortable.',
//     //sortable: false,
//     width: 150,
//     /*valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,*/
//   },
//   {field: 'career',headerName: 'Carrera',width: 150,editable: true,},
//   {field: 'announcement',headerName: 'Convocatoria',type: 'number',width: 180,editable: true,},
//   {field: 'weighing',headerName: 'Ponderación',type: 'number',width: 180,editable: true,},
//   {field: 'tutor',headerName: 'Tutor',width: 150,editable: true,}

// ]

export default function Searcher({items,columns}) {

  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}