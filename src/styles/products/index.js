import { styled } from "@mui/system";
import { Colors } from "../theme";
import { Box, Button, IconButton } from "@mui/material";

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '250px',
    height: '200px',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px',
    }
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4
}));

export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isFav'
})(({ isFav, theme }) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0
    },
}));

export const ProductAddToCard = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({
    width: '120px',
    fontSize: '12px',
    bottom: '5px',
    [theme.breakpoints.up('md')]: {
        position: "absolute",
        bottom: '2%',
        width: '250px',
        padding: '10px 5px '
    },
    background: Colors.secondary,
    opacity: 0.9
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: '7px',
}))

export const ProductActionWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isFav'

})(({ show, theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: show ? 'visable' : 'none',
        position: 'absolute',
        right: 0,
        top: "20%"
    }
}))

