"use client"

import {Box, Typography, Button, Container, Avatar, ButtonProps} from "@mui/material"
import { Download as DownloadIcon, Email as EmailIcon } from "@mui/icons-material"
import {styled} from "@mui/system";

const StyledBox = styled(Box)(()=>({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    paddingTop: 64,
    paddingBottom: 32,
}))

const StyleContainerBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: 32,
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        textAlign: "left",
    }
}))

const StyledRoleTypography = styled(Typography)(({theme})=>({
    opacity: 0.9,
    marginBottom: theme.spacing(3),
}))

const StyledDescriptionTypography = styled(Typography)(({theme})=>({
    fontSize: "1.2rem",
    opacity: 0.8,
    marginBottom: theme.spacing(4),
}))

const StyleDataBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: 8,
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
    }
}))

const StyleContactMeButton = styled(Button)(()=>({
    backgroundColor: "white",
    color: "primary.main",
    "&:hover": { backgroundColor: "grey.100" },
}))
interface DownloadButtonProps extends ButtonProps {
    component?: 'a';
    href?: string;
    download?: string;
}

const StyleDownloadCVButton = styled(Button)<DownloadButtonProps>(() => ({
        borderColor: "white",
        color: "white",
        "&:hover": {
            borderColor: "grey.300",
            backgroundColor: "rgba(255,255,255,0.1)"
        },
    })
);

const StyleAvatarBox = styled(Box)(()=>({
    flex: 1, display: "flex",
    justifyContent: "center"
}))

const StyleAvatar = styled(Avatar)(({theme})=>({
    border: "4px solid white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    width: 200,
    height: 200,
    [theme.breakpoints.up("md")]: {
        width: 300,
        height: 300,
    }
}))

export function Hero() {

    return (
        <StyledBox>
            <Container maxWidth="lg">
                <StyleContainerBox>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
                            Hi, I&#39;m Dakshina
                        </Typography>
                        <StyledRoleTypography variant="h5" gutterBottom>
                            Full Stack Developer
                        </StyledRoleTypography>
                        <StyledDescriptionTypography variant="body1">
                            Hi, I&#39;m Tharindu Dakshina, a Undergraduate University of Colombo School of Computing.
                            With two years of experience in Software application development, specializing in React, Spring Boot, Node.js, Next.js, Nest.js and MySql.
                        </StyledDescriptionTypography>
                        <StyleDataBox>
                            <StyleContactMeButton
                                variant="outlined"
                                size="large"
                                startIcon={<EmailIcon />}
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Contact Me
                            </StyleContactMeButton>
                            <StyleDownloadCVButton
                                variant="outlined"
                                size="large"
                                component="a"
                                startIcon={<DownloadIcon />}
                                href="./TharinduDakshina.pdf"
                                download="TharinduDakshina.pdf"
                            >
                                Download CV
                            </StyleDownloadCVButton>
                        </StyleDataBox>
                    </Box>
                    <StyleAvatarBox >
                        <StyleAvatar
                            src="./my.jpg"
                            alt="Tharindu Dakshina"
                        />
                    </StyleAvatarBox>
                </StyleContainerBox>
            </Container>
        </StyledBox>
    )
}
