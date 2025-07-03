"use client"

import {Box, Typography, Container, Grid, Paper} from "@mui/material"
import {
    Diversity3 as TeamWorkIcon,
    Code as CodeIcon,
    Palette as DesignIcon,
    Speed as SpeedIcon
} from "@mui/icons-material"
import {styled, TypographyProps,} from "@mui/system";

const features = [
    {
        icon: <CodeIcon sx={{fontSize: 40}}/>,
        title: "Clean Code",
        description: "Writing maintainable and scalable code following best practices and industry standards.",
    },
    {
        icon: <DesignIcon sx={{fontSize: 40}}/>,
        title: "Modern Design",
        description: "Creating beautiful and intuitive user interfaces with attention to detail and user experience.",
    },
    {
        icon: <SpeedIcon sx={{fontSize: 40}}/>,
        title: "Fast Performance",
        description: "Optimizing applications for speed and performance to deliver the best user experience.",
    },
    {
        icon: <TeamWorkIcon sx={{fontSize: 40}}/>,
        title: "Collaborative Spirit",
        description: "Enjoy working in teams to share ideas, solve problems together, and build better solutions through strong communication and cooperation.",
    },
]

const StyleMainContainerBox = styled(Box)(() => ({
    paddingBottom: 100,
    paddingTop: 100,
}))

interface StyledTypographyProps extends TypographyProps {
    component?: string
}


const StyleTitleTypography = styled(Typography)<StyledTypographyProps>(({theme}) => ({
    fontWeight: "bold",
    marginBottom: theme.spacing(6),
}));

const StylePaper = styled(Paper)(({theme}) => ({
    maxWidth: '600px',
    maxHeight: '600px',
    padding: 24,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    transition: "transform 0.3s ease",
    "&:hover": {transform: "translateY(-5px)"},
}))

export function About() {
    return (
        <StyleMainContainerBox id="about">
            <Container maxWidth="lg">
                <StyleTitleTypography
                    variant="h3"
                    component="h2"
                    textAlign="center"
                    gutterBottom
                >
                    About Me
                </StyleTitleTypography>
                <Grid container spacing={4} alignItems="center">
                    <Grid>
                        <Typography variant="body1" sx={{fontSize: "1.1rem", lineHeight: 1.8, mb: 2}}>
                            I am an enthusiastic individual who is eager to learn new things perpetually while getting
                            myself up-to-date with cutting edge technologies. I am good at being a team player as well
                            as
                            leading a team. I am more keen on Web development and Mobile Development. I am Hardworking
                            individual who likes to face difficult situations which open up new opportunities. and
                            highly
                            motivated to improve my skills and have experience in working with clients to ensure their
                            best satisfaction.
                        </Typography>

                    </Grid>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        {features.map((feature, index) => (
                            <Grid key={index} size={6} sx={{}}>
                                <StylePaper elevation={2}>
                                    <Box sx={{color: "primary.main"}}>{feature.icon}</Box>
                                    <Box sx={{overflow:"hidden"}}>
                                        <Typography variant="h6" gutterBottom sx={{fontWeight: "bold",fontSize:"15px"}}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </StylePaper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </StyleMainContainerBox>
    )
}
