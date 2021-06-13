import React from 'react';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const ContainerSliderCuotas = ({ cuota, marksCuotas, sliderChangeC, handlerInputCuota, handleBlurCuota }) => {

    return (
        <Container>
            <Box pt={4} display="flex" justifyContent="space-between" alignItems="center">
                <h4>Cuotas</h4>
                <TextField type="currency" onChange={handlerInputCuota} onBlur={handleBlurCuota} value={cuota} />
            </Box>
            <Slider
                value={typeof cuota === 'number' ? cuota : 3}
                min={3}
                max={24}
                step={3}
                defaultValue={3}
                marks={marksCuotas}
                onChange={sliderChangeC}
            />
        </Container>
    )
}

export default ContainerSliderCuotas;
