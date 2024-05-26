import React from 'react'
// import { Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner';


export default function Banner() {
    // const theme = useTheme();
    // const screenMatcheSize = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage
                src='https://us.123rf.com/450wm/kucingliarz/kucingliarz2310/kucingliarz231013361/216251237-clothing-logo-template-vector-icon-illustration-design-vector-illustration.jpg?ver=6'
            />
            <BannerContent>
                <Typography variant='h6'>Huge Collection</Typography>
                <BannerTitle variant='h2'>New Bags</BannerTitle>
                <BannerDescription variant='subtitle'>
                    Welcome to our online store—a curated collection of fashion, tech, home goods, wellness products, gourmet treats, kids' items, gifts, and pet supplies, all designed to make your shopping experience convenient and delightful. Shop with us for high-quality products and seamless online shopping.
                </BannerDescription>
                <BannerShopButton color='primary'>Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}
