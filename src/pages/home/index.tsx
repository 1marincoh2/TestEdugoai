import React, {useState, useEffect} from 'react';
import {withStyles, makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
    IconButton,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        table: {
            minWidth: 650,
        },

        root: {

            minWidth: 275,
            flexWrap: 'wrap',

        },
    })
);
const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const Home = () => {

    const classes = useStyles();

    const Datepersons = [
        {id: 1, name: 'jose alberto', lastname: 'marin', lastname2: 'coh', age: 28, kilograms: 67.8},
        {id: 2, name: 'alina sayuri', lastname: 'marin ', lastname2: 'canul', age: 7, kilograms: 4.3},
        {id: 3, name: 'maria beatriz', lastname: 'canul', lastname2: 'tah', age: 24, kilograms: 6.0},
        {id: 4, name: 'jullissa del carmen', lastname: 'tah', lastname2: 'montejo', age: 67, kilograms: 4.3},
        {id: 5, name: 'karen alexia', lastname: 'tah', lastname2: 'montejo', age: 4, kilograms: 3.9},
        {id: 6, name: 'karen alexia2a', lastname: 'tah', lastname2: 'montejo', age: 4, kilograms: 3.9},]

    const [Date, setDate] = useState(Datepersons);
    const [Insertar, setInsertar] = useState(false);
    const [Editar, setEditar] = useState(false);
    const [Eliminar, setEliminar] = useState(false);

    const [persons, setPersons] = useState({
        id: 0,
        name: '',
        lastname: '',
        lastname2: '',
        age: 0,
        kilograms: 0,
    });

    const person = (elemento: any, caso: any) => {
        setPersons(elemento);
        (caso === 'Editar') ? setEditar(true) : setEliminar(true)
    };


    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setPersons((prevState) => ({
            ...prevState,
            [name]: value
        }))
        console.log(persons);
    }

    const editar = () => {
        const NuevaDate = Date;
        NuevaDate.map(Datepersons => {
            if (Datepersons.id === persons.id) {
                Datepersons.name = persons.name;
                Datepersons.lastname = persons.lastname;
                Datepersons.lastname2 = persons.lastname2;
                Datepersons.age = persons.age;
                Datepersons.kilograms = persons.kilograms;
            }
        })
        setDate(NuevaDate);
        setEditar(false);
    }
    const eliminar = () => {
        setDate(Date.filter(data => data.id !== persons.id));
        setEliminar(false);
    }
    const OpenInsertat = () => {
        // @ts-ignore
        setPersons(null);
        setInsertar(true);
    }

    const insertar = () => {

        const agregardata = persons;
        agregardata.id = Date[Date.length - 1].id + 1;
        const newDate = Date;
        newDate.push(agregardata);
        setDate(newDate);
        setInsertar(false);
    }


    return (
        <div>


            <Dialog aria-labelledby='customized-dialog-title' open={Insertar}>
                <DialogTitle id='customized-dialog-title'>
                    Agregando Datos </DialogTitle>
                <DialogContent dividers>


                    <TextField
                        variant='outlined'
                        name='name'
                        label='Nombre'
                        value={persons ? persons.name : ''}
                        fullWidth
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />


                    <TextField
                        variant='outlined'
                        name='lastname'
                        label='Apellido Paterno'
                        fullWidth
                        value={persons ? persons.lastname : ''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='lastname2'
                        label='Apellido Materno'
                        fullWidth
                        value={persons ? persons.lastname2 : ''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />

                    <TextField
                        variant='outlined'
                        name='age'
                        label='Edad'
                        fullWidth
                        value={persons ? persons.age : ''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='kilograms'
                        label='Peso(kg)'
                        fullWidth
                        value={persons ? persons.kilograms : ''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />

                    <DialogActions>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => insertar()}
                        >
                            Insertar


                        </Button>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => setInsertar(false)}

                        >
                            Cancelar


                        </Button>
                    </DialogActions>

                </DialogContent>

            </Dialog>
            <br/>

            <Card className={classes.root}>
                <CardContent>
                    <br/>
                    <Button variant="contained" color="primary" onClick={OpenInsertat}>
                        <AddIcon/>Agregar
                    </Button>
                    <br/> <br/>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell> Nombre </StyledTableCell>
                                    <StyledTableCell align="right"> Apellido Paterno</StyledTableCell>
                                    <StyledTableCell align="right"> Apellido Materno</StyledTableCell>
                                    <StyledTableCell align="right">Edad</StyledTableCell>
                                    <StyledTableCell align="right">Peso(kg)</StyledTableCell>
                                    <StyledTableCell align="center">actions</StyledTableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {Date.map(elemento => (
                                    <StyledTableRow key={elemento.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {elemento.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {elemento.lastname}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {elemento.lastname2}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {elemento.age}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {elemento.kilograms} KG
                                        </StyledTableCell>
                                        <StyledTableCell align="center">

                                            <EditIcon color="primary" onClick={() => person(elemento, 'Editar')}/>


                                            <DeleteIcon color="secondary" onClick={() => person(elemento, 'Eliminar')}/>

                                        </StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
            <Dialog aria-labelledby='customized-dialog-title' open={Editar}>
                <DialogTitle id='customized-dialog-title'>
                    Actualizando Datos </DialogTitle>
                <DialogContent dividers>


                    <TextField
                        variant='outlined'
                        name='name'
                        label='Nombre'
                        value={persons && persons.name}
                        fullWidth
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />


                    <TextField
                        variant='outlined'
                        name='lastname'
                        label='Apellido Paterno'
                        fullWidth
                        value={persons && persons.lastname}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='lastname2'
                        label='Apellido Materno'
                        fullWidth
                        value={persons && persons.lastname2}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='age'
                        label='Edad'
                        fullWidth
                        value={persons && persons.age}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='kilograms'
                        label='Peso(kg)'
                        fullWidth
                        value={persons && persons.kilograms}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <DialogActions>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => editar()}
                        >
                            actualizar


                        </Button>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => setEditar(false)}

                        >
                            Cancelar


                        </Button>
                    </DialogActions>

                </DialogContent>

            </Dialog>


            <Dialog aria-labelledby='customized-dialog-title' open={Eliminar}>

                <DialogContent dividers>

                    <DialogTitle id='customized-dialog-title'>
                        Esta seguro que desea Eliminar esta informacion
                    </DialogTitle>
                    <Typography align='center' variant='h3'>{persons && persons.name}</Typography>
                    <DialogActions>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => eliminar()}
                        >
                            si


                        </Button>
                        <Button

                            size='large'
                            type='submit'
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'
                            onClick={() => setEliminar(false)}

                        >
                            no


                        </Button>

                    </DialogActions>
                </DialogContent>

            </Dialog>


        </div>


    );


}

export default Home