import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from '../../data/data';
import SingleProduct from './singleproduct';
import SingleProductDesktop from './singleproductDesktop';


export default function Products() {
    const theme = useTheme();
    const screenMatcheSize = useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map(product => (
        <Grid
            item
            key={product.id}
            xs={2}
            sm={4}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {screenMatcheSize ?
                (<SingleProduct product={product} screenMatcheSize={screenMatcheSize} />)
                :
                (<SingleProductDesktop product={product} screenMatcheSize={screenMatcheSize} />)
            }
        </Grid>
    ))

    return (
        <Container>
            <Grid
                container
                spaceing={{ xs: 2, md: 3 }}
                justifyContent={"center"}
                sx={{ margin: '20px 10px 10px 4px' }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}
