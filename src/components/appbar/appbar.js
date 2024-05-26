import React from 'react'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from './appbarMobile'
import AppbarDesktop from './appbarDesktop'

export default function Appbar() {
    const theme = useTheme();
    const screenMatcheSize = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {screenMatcheSize ? (
                <AppbarMobile screenMatcheSize={screenMatcheSize} />
            ) : (
                <AppbarDesktop screenMatcheSize={screenMatcheSize} />
            )}
        </>
    );
}