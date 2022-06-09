import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper, Button, TableFooter,TablePagination } from '@mui/material';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const TableActivities = (props) => {
    const activities = props.activities;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - activities.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Fecha Inicio</TableCell>
            <TableCell align="right">Fecha Final</TableCell>
            <TableCell align='right'>Estado   </TableCell>
            <TableCell align='right'></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? activities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : activities
            ).map((activitie) => (
            <TableRow
            key={activitie.Actividad.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {activitie.Actividad.name}
                </TableCell>
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.startDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()}</TableCell>
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.endDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()}</TableCell>
                <TableCell align='right'>{activitie.Actividad.validity ? "En curso" : "Terminada"}</TableCell>
                <TableCell align='right'>
                    <Link style={{textDecoration:"none"}} to={`/actividades/detalles/${activitie.ActividadId}`}>
                    <Button color="primary" variant="contained" size='small' sx={{color:'#fafafa'}}>
                        Ver
                    </Button>
                    </Link>
                </TableCell>
            </TableRow>
        ))}
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={activities.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
    </Table>
    </TableContainer>
    );
}

export default TableActivities;