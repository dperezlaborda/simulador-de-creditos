import React from 'react';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


const ContainerSliderMonto = ({ monto, marksMonto, sliderChangeM, handlerInputM, handleBlurMonto }) => {

    return (
        <Container>
            <Box pt={2} display="flex" justifyContent="space-between" alignItems="center">
                <h4>Monto Total</h4>
                <Box display="flex" alignItems="center">
                    <div className="peso">$</div>
                    <TextField type="currency" inputProps={{ maxLength: 5 }} onChange={handlerInputM} onBlur={handleBlurMonto} value={monto} />
                </Box>
            </Box>
            <Slider
                value={typeof monto === 'number' ? monto : 5000}
                min={5000}
                max={50000}
                step={500}
                defaultValue={5000}
                marks={marksMonto}
                onChange={sliderChangeM}
            />
        </Container>
    )
}

export default ContainerSliderMonto;