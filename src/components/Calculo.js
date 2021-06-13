import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Calculo = ({ cuota, monto }) => {

    const cobroMonto = () => {
        const interes = 1.9798;
        let montoFinal = ((monto * interes) / cuota).toFixed(2);
        return montoFinal;
    }
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #000000 30%, #00010 90%)',
            textAlign: 'justified',
            fontSize: 12,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 60,
            width: 140,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(0, 50, 135, .3)',

        },
        label: {
            textTransform: 'capitalize',
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <h4>CUOTA FIJA POR MES</h4>
                <h4>$ {cobroMonto()}</h4>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Button
                    classes={{
                        root: classes.root,
                        label: classes.label
                    }}
                    onClick={() => console.log("Obtené tu Crédito")}>OBTENÉ CRÉDITO</Button>
                <Button
                    classes={{
                        root: classes.root,
                        label: classes.label
                    }} onClick={() => console.log("Ver el detalle de tus Cuotas")}>VER DETALLE DE CUOTAS</Button>
            </Box>

        </div>
    )
}

export default Calculo;
