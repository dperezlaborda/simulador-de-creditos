import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import ContainerSliderCuotas from '../components/ContainerSliderCuotas';
import ContainerSliderMonto from '../components/ContainerSliderMonto';
import Calculo from '../components/Calculo';

const marksCuotas = [
    {
        value: 3,
        label: '3'
    },
    {
        value: 24,
        label: '24'
    }
]

const marksMonto = [
    {
        value: 5000,
        label: '$5.000'
    },
    {
        value: 50000,
        label: '$50.000'
    }
]

const Card = () => {

    const [monto, setMonto] = useState(5000);
    const [cuota, setCuota] = useState(3);

    const sliderChangeM = (e, newMonto) => {
        setMonto(newMonto)
    }

    const sliderChangeC = (e, newCuota) => {
        setCuota(newCuota)
    }

    const handlerInputM = (event) => {
        setMonto(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handlerInputCuota = (event) => {
        setCuota(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlurMonto = () => {
        if (monto < 5000) {
            setMonto(5000);
        } else if (monto > 50000) {
            setMonto(50000);
        }
    };

    const handleBlurCuota = () => {
        if (cuota < 3) {
            setCuota(3);
        } else if (cuota > 24) {
            setCuota(24);
        }
    };

    return (
        <Box className="card border-purple">
            <h4 className="title"> SIMULÁ TU CRÉDITO </h4>
            <ContainerSliderMonto
                monto={monto}
                marksMonto={marksMonto}
                sliderChangeM={sliderChangeM}
                handlerInputM={handlerInputM}
                handleBlurMonto={handleBlurMonto}
            />
            <ContainerSliderCuotas
                cuota={cuota}
                marksCuotas={marksCuotas}
                sliderChangeC={sliderChangeC}
                handlerInputCuota={handlerInputCuota}
                handleBlurCuota={handleBlurCuota}
            />
            <Calculo cuota={cuota} monto={monto} />
        </Box>
    )
}

export default Card;
