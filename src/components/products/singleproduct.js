import React from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCard, ProductFavButton, ProductImage } from '../../styles/products/index'
import ProductMeta from './ProductMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModal from '../../hooks/useDialogModal'
import productDetail from '../productdetail/productdetail'


export default function SingleProduct({ product, screenMatcheSize }) {

    const [ProductDetailDialog, ShowProductDetailDialog, closeProductDetailDialog] = useDialogModal(productDetail)

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} screenMatcheSize={screenMatcheSize} />
                <ProductActionWrapper>
                    <Stack direction={"row"}>
                        <ProductFavButton isFav={1}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => ShowProductDetailDialog()}>
                            <FitScreenIcon color='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductAddToCard variant='contained'>Add To Cart</ProductAddToCard>
            <ProductDetailDialog product={product} />
        </>
    )
}
