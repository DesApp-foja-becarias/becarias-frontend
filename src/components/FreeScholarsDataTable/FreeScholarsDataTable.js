import React from 'react'
import { columnsTutor } from '../../constants/searcherConstant';
import { mapScholarsForSearcher } from '../../utils/scholarUtils';
import Searcher from '../Searcher/Searcher';

function FreeScholarsDataTable({scholars, setScholars}) {
	const columns = [
		{ headerName: 'Nombre', field: 'name' },
		{ headerName: 'Apellido', field: 'lastName' },
		{ headerName: 'Correo', field: 'email' },
		{ headerName: 'Telefono', field: 'phone' },
	]

	return <Searcher
		setStateCallback={setScholars} 
		items={scholars? mapScholarsForSearcher(scholars):[]} 
		columns={columns}
		/>
	
}

export default FreeScholarsDataTable