import React from 'react'
import {
    MyList,
    ActionIconsContainerDesktop,
    ActionIconsContainerMobile,
} from '../../styles/appbar'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { Colors } from '../../styles/theme'


export default function Actions({ screenMatcheSize }) {
    const Component = screenMatcheSize
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;
    return (
        <Component>
            <MyList type="row">
                <Divider orientation='vertical' flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: screenMatcheSize && Colors.muted
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: screenMatcheSize && Colors.muted
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: screenMatcheSize && Colors.muted
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
            </MyList>
        </Component>
    )
}
