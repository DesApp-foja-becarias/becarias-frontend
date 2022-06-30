import { Button } from '@mui/material'
import React from 'react'
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function CsvButton({users}) {
	return (
		<ExcelFile element={
		<Button
			variant="contained"
			color="primary"
			> 
			Descargar Excel (Correos)
		</Button>}>
				<ExcelSheet data={users} name='mails'>
					<ExcelColumn label="Correo" value="email" />
					<ExcelColumn label="Nombre" value="name" />
					<ExcelColumn label="Apellido" value="lastname" />
					<ExcelColumn label="Telefono" value="telephone" />
					<ExcelColumn label="Direccion" value="address" />
				</ExcelSheet>
		
		
	</ExcelFile>
	)
}

export default CsvButton