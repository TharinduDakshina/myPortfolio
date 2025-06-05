import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {styled} from "@mui/system";

const pages = ['Home', 'About', 'Project','Contact'];

const StylesAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.navbar,
    height: '15%',
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
}))

const StyleBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    }
}))

const StyleMenu = styled(Menu)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    }
}))

const StyleBoxSecondContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    gap: '2%',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}))

const StyleButton = styled(Button)(({theme}) => ({
    my: 2,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    display: 'block',

    '&:hover': {
        color: theme.palette.text.secondary,
    }
}))

const StyleAvatar = styled(Avatar)(() => ({
    width: 50,
    maxWidth: 60,
    height: 50,
}))


export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <StylesAppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StyleBox>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <StyleMenu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{textAlign: 'center'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </StyleMenu>
                    </StyleBox>

                    <StyleBoxSecondContainer>
                        {pages.map((page) => (
                            <StyleButton
                                key={page}
                                onClick={handleCloseNavMenu}
                            >
                                {page}
                            </StyleButton>
                        ))}
                    </StyleBoxSecondContainer>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <StyleAvatar  alt="my profile pitcher" src='./my.jpg'/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {pages.map((pages) => (
                                <MenuItem key={pages} onClick={handleCloseUserMenu}>
                                    <Typography sx={{textAlign: 'center'}}>{pages}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </StylesAppBar>
    );
}