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
import {infoPerson} from "../../types/usertype/infoPerson.type";
import { useFormik } from 'formik';
import {values} from "mobx";



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

    const Datepersons:infoPerson[] = [
        {id: 1, name: 'jose alberto', lastname: 'marin', lastname2: 'coh', age: 28, kilograms: 67.8},
        {id: 2, name: 'alina sayuri', lastname: 'marin ', lastname2: 'canul', age: 7, kilograms: 4.3},
        {id: 3, name: 'maria beatriz', lastname: 'canul', lastname2: 'tah', age: 24, kilograms: 6.0},
        {id: 4, name: 'jullissa del carmen', lastname: 'tah', lastname2: 'montejo', age: 67, kilograms: 4.3},
        {id: 5, name: 'karen alexia', lastname: 'tah', lastname2: 'montejo', age: 4, kilograms: 3.9},
        {id: 6, name: 'karen alexia2a', lastname: 'tah', lastname2: 'montejo', age: 4, kilograms: 3.9},]

    const [persons, setpersons] = useState<infoPerson[]>(Datepersons);
    const [Insertar, setInsertar] = useState(false);
    const [Editar, setEditar] = useState(false);
    const [Eliminar, setEliminar] = useState(false);

    const [person, setPerson] = useState<infoPerson>({
        id: 0,
        name: '',
        lastname: '',
        lastname2: '',
        age: 0,
        kilograms: 0,
    });

    const persona = (elemento: infoPerson, caso: any) => {
        setPerson(elemento);
        (caso === 'Editar') ? setEditar(true) : setEliminar(true)
    };


    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setPerson((prevState) => ({
            ...prevState,
            [name]: value
        }))
        console.log(person);
    }

    const editar = () => {
        const NuevaDate = Datepersons;
        NuevaDate.map(Datepersons => {
            if (Datepersons.id === person.id) {
                Datepersons.name = person.name;
                Datepersons.lastname = person.lastname;
                Datepersons.lastname2 = person.lastname2;
                Datepersons.age = person.age;
                Datepersons.kilograms = person.kilograms;
            }
        })
        setpersons(NuevaDate);
        setEditar(false);
    }
    const eliminar = () => {
        setpersons(persons.filter(data => data.id !== person.id));
        setEliminar(false);
    }
    const OpenInsertat = () => {
        // @ts-ignore
        setPerson(null);
        setInsertar(true);
    }

    const insertar = (vuales:infoPerson) => {

        const agregardata = person;
        agregardata.id = persons[persons.length - 1].id + 1;
        const newDate = persons;
        newDate.push(agregardata);
        setpersons(newDate);
        setInsertar(false);
    }

        const formik = useFormik({
            initialValues: {person},
            onSubmit: (vuales: infoPerson | any) => {
                alert(JSON.stringify(vuales, null, 2));
                console.log(values)
                insertar(vuales)
            }

        });


    return (
        <div>


            <Dialog aria-labelledby='customized-dialog-title' open={Insertar}>
                <DialogTitle id='customized-dialog-title'>
                    Agregando Datos </DialogTitle>
                <DialogContent dividers>

                     <form onSubmit={formik.handleSubmit}>
                    <TextField
                        variant='outlined'
                        name='name'
                        label='Nombre'
                        value={person ? person.name:''}
                        fullWidth
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />


                    <TextField
                        variant='outlined'
                        name='lastname'
                        label='Apellido Paterno'
                        fullWidth
                        value={person ? person.lastname:''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='lastname2'
                        label='Apellido Materno'
                        fullWidth
                        value={person ? person.lastname2:''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />

                    <TextField
                        variant='outlined'
                        name='age'
                        label='Edad'
                        fullWidth
                        value={person ? person.age :''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='kilograms'
                        label='Peso(kg)'
                        fullWidth
                        value={person ? person.kilograms:''}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />

                    <DialogActions>
                        <Button

                            size='large'
                            type="submit"
                            style={{marginTop: '15px'}}
                            variant='contained'
                            color='primary'

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
                     </form>
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
                                {persons.map(elemento => (
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

                                            <EditIcon color="primary" onClick={() => persona(elemento, 'Editar')}/>


                                            <DeleteIcon color="secondary" onClick={() => persona(elemento, 'Eliminar')}/>

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
                        value={person && person.name}
                        fullWidth
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />


                    <TextField
                        variant='outlined'
                        name='lastname'
                        label='Apellido Paterno'
                        fullWidth
                        value={person && person.lastname}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='lastname2'
                        label='Apellido Materno'
                        fullWidth
                        value={person && person.lastname2}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='age'
                        label='Edad'
                        fullWidth
                        value={person && person.age}
                        style={{marginTop: '8px', marginLeft: '8px', paddingRight: '15px'}}
                        onChange={handleChange}
                    />
                    <TextField
                        variant='outlined'
                        name='kilograms'
                        label='Peso(kg)'
                        fullWidth
                        value={person && person.kilograms}
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
                    <Typography align='center' variant='h3'>{person && person.name}</Typography>
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
