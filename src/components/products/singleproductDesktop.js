import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCard, ProductFavButton, ProductImage } from '../../styles/products/index'
import ProductMeta from './ProductMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModal from '../../hooks/useDialogModal'
import productDetail from '../productdetail/productdetail'

export default function SingleProductDesktop({ product, screenMatcheSize }) {
    const [ProductDetailDialog, ShowProductDetailDialog, closeProductDetailDialog] = useDialogModal(productDetail)

    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                {
                    (showOptions && <ProductAddToCard show={showOptions} variant='contained'>
                        Add to Cart
                    </ProductAddToCard>)
                }

                <ProductActionWrapper show={showOptions}>
                    <Stack direction={"column"}>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => ShowProductDetailDialog()}>
                            <FitScreenIcon color='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductMeta product={product} screenMatcheSize={screenMatcheSize} />
            <ProductDetailDialog product={product} />

        </>
    )
}
