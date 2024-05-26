import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'
import { Typography } from '@mui/material'

export default function ProductMeta({ product, screenMatcheSize }) {
    return (
        <ProductMetaWrapper>
            <Typography variant={screenMatcheSize ? 'h6' : 'h5'} lineHeight={2} >
                {product.name}
            </Typography>
            <Typography variant={screenMatcheSize ? 'caption' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}
