"use client"

import { useState } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import {styled, TypographyProps} from "@mui/system";

const StyleListItemText = styled(ListItemText)(()=>({
    textAlign: "center",
    cursor: "pointer",
    color:"white" ,
    borderBottom:"1px solid gray",
    paddingBottom:"5%"
}))

const StyleAppBar = styled(AppBar)(() => ({
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderStartEndRadius:"0",
    borderStartStartRadius:"0",
}))

interface StyledTypographyProps extends TypographyProps {
    component?: string
}

const StyledTypography = styled(Typography)<StyledTypographyProps>(({theme}) => ({
    flexGrow: 1,
    color: `${theme.palette.primary.main}`,
    fontWeight: "bold"
}))

const StyleBox =styled(Box)(() => ({
    display: "flex",
    gap: 2
}))

const StyleDrawer =styled(Drawer)(({theme}) => ({
    display: "block",
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
}))

const StyleList = styled(List)(() => ({
    backgroundColor: "black",
}))

const StyleBox2 =styled(Box)(() => ({
    textAlign: "center" ,
    backgroundColor: "black",
    height: "100vh"
}))

const StyleTypographyForMobileMenu = styled(Typography)(() => ({
    my: 2 ,
    color: "white",
    paddingBottom:"30px",
    paddingTop:"20px"
}))


const navItems = ["About", "Skills", "Projects", "Contact"]

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase())
        element?.scrollIntoView({ behavior: "smooth" })
        setMobileOpen(false)
    }

    const drawer = (
        <StyleBox2 onClick={handleDrawerToggle}>
            <StyleTypographyForMobileMenu variant="h6">
                Portfolio
            </StyleTypographyForMobileMenu>
            <StyleList>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <StyleListItemText
                            primary={item}
                            onClick={() => scrollToSection(item)}
                        />
                    </ListItem>
                ))}
            </StyleList>
        </StyleBox2>
    )

    return (
        <>
            <StyleAppBar position="fixed">
                <Toolbar>
                    <StyledTypography variant="h6" component="div">
                        Tharindu Dakshina
                    </StyledTypography>
                    {isMobile ? (
                        <IconButton color="primary" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <StyleBox>
                            {navItems.map((item) => (
                                <Button key={item} color="primary" onClick={() => scrollToSection(item)} sx={{ fontWeight: 500 }}>
                                    {item}
                                </Button>
                            ))}
                        </StyleBox>
                    )}
                </Toolbar>
            </StyleAppBar>
            <StyleDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </StyleDrawer>
        </>
    )
}
