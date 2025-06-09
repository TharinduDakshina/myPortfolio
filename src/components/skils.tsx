"use client"

import { Box, Typography, Container, Grid, Chip, Paper, styled } from "@mui/material"
import {TypographyProps} from "@mui/system";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Material-UI", "Tailwind CSS", "HTML5", "CSS","JavaScript"],
    },
    {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Nest.Js", "Node.js", "Kotlin", "Python", "MySQL", "PostgreSQL",
            "MongoDB", "REST APIs"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma", "Jest", "Jira" ,"Android Studio", "Open-AI", "Gemini"],
    },
]

const StyleChip = styled(Chip)(({theme})=>({
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    cursor: "default",
    "&.MuiChip-root:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: "white !important",
    },
}))

interface StyledTypographyProps extends TypographyProps {
    component?: string
}

const StyleTypography = styled(Typography)<StyledTypographyProps>(()=>({
    fontWeight: "bold",
    marginBottom: 48
}))

const StylePaper = styled(Paper)(()=>({
    padding: 32,
    height: "100%",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-5px)" },
}))

const StyleTypographyTitle = styled(Typography)(({theme})=>({
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: 24
}))

const StyleBox = styled(Box)(()=>({
    display: "flex",
    flexWrap: "wrap",
    gap: 8
}))

export function Skills() {
    function skillOnClickHandel(){}

    return (
        <Box id="skills" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <StyleTypography variant="h3" component="h2" textAlign="center" gutterBottom >
                    Skills & Technologies
                </StyleTypography>
                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid key={index} sx={{maxWidth:700}}>
                            <StylePaper elevation={3} >
                                <StyleTypographyTitle variant="h5" gutterBottom >
                                    {category.title}
                                </StyleTypographyTitle>
                                <StyleBox >
                                    {category.skills.map((skill, skillIndex) => (
                                        <StyleChip
                                            key={skillIndex}
                                            label={skill}
                                            variant="outlined"
                                            tabIndex={-1}
                                            onClick={skillOnClickHandel}
                                        />
                                    ))}
                                </StyleBox>
                            </StylePaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
