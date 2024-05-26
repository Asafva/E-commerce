import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography } from '@mui/material'
import React from 'react'
import { Colors } from "../../styles/theme";
import { Box, styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close'
// import { useTheme } from '@emotion/react';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Product, ProductImage } from '../../styles/products/index'
import IncDec from '../ui';
import FavoriteIcon from '@mui/icons-material/Favorite'


function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4)
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}));


export default function ProductDetail({ open, onClose, product }) {

    const theme = useTheme();
    const screenMatcheSize = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            transitionComponent={SlideTransition}
            variant="permanat"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{
                background: Colors.secondary
            }}>
                <Box
                    display={'flex'}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    Product Title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirecrion={screenMatcheSize ? 'column' : 'row'}>
                    <Product sx={{ mr: 4 }}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1">SKU 123 </Typography>
                        <Typography variant="subtitle1">Availability: 5 in stock </Typography>
                        <Typography sx={{ lineHeight: 2 }} variant='h4'>
                            {product.title}
                        </Typography>
                        <Typography variant="body1">
                            {product.description}
                        </Typography>
                        <Box
                            sx={{ mt: 4 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <IncDec />
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }} />
                            Add to Favorite
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}
