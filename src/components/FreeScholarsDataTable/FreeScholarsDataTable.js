import React from 'react'
import { columnsTutor } from '../../constants/searcherConstant';
import { mapScholarsForSearcher } from '../../utils/scholarUtils';
import Searcher from '../Searcher/Searcher';

function FreeScholarsDataTable({scholars, setScholars}) {
	const columns = [
		{ headerName: 'Nombre', field: 'name' },
		{ headerName: 'Apellido', field: 'lastname' },
		{ headerName: 'Correo', field: 'email' },
		{ headerName: 'Telefono', field: 'telephone' },
	]

	return <Searcher
		setStateCallback={setScholars} 
		items={scholars? mapScholarsForSearcher(scholars):[]} 
		columns={columns}
		/>
	
}

export default FreeScholarsDataTable