import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Searcher({setStateCallback,items,columns}) {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const onSelectionChange = (selectedRowsFromDG) => {  
    /**
     * selectedRows is an array of selected rows
     * return the value of the selected row 
     *     *  */    
      setSelectedRows(selectedRowsFromDG);
      setStateCallback(items.filter(item => selectedRowsFromDG.includes(item.id)));
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[8]}
        //set state of the selection of the datagrid
        onSelectionModelChange={onSelectionChange}

        />
    </div>
  );
}