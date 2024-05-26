import React from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import Actions from './actions'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { useUIContext } from '../../context/ui'

export default function AppbarDesktop({ screenMatcheSize }) {

    const { setDrawerOpen, setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>myBags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)} />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions screenMatcheSize={screenMatcheSize} />
        </AppbarContainer>

    )
}
