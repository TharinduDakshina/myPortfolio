"use client"

import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip, styled,
} from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import {TypographyProps} from "@mui/system";
import Image from 'next/image'

const projects = [
    {
        title: "EchoLynk- Conversation between the deaf and mute persons with healthy person.",
        description: "This is mobile & web application.I developed the sinIn, signUp part, implemented the UIs, and nowadays implementing the live chat part",
        image: "./images/EchoLynk.png",
        technologies: [" Java", "XML", "React.Js", "Spring Boot", "Firebase", "python", "MVVM", "MVC", "Fast API"],
        githubUrl: "https://github.com/Third-Year-Project-05",
    },
    {
        title: "RoadRescue- Find the nearby garages for breakdown vehicles.",
        description: "This is a web and mobile application. I worked on implementing the mobile application front end and backend.",
        image: "./images/RoadResque.jpeg",
        technologies: ["HTML", "JavaScript", "CSS", "Java", "Kotlin","MYSQL", "AWS", "Google map API","MVC", "MVVM"],
        githubUrl: "https://github.com/TharinduDakshina/RoadRescueGarage-TechnicianMobile",
    },
    {
        title: "Car-rental- Rent by cars",
        description: "I developed a web application for renting and buying cars as a learning project. It allows users to browse vehicles, compare options, and complete transactions easily",
        image: "./images/carRental.png",
        technologies: ["Java", "Spring", "JavaScript", "HTML", "CSS", "MYSQL"],
        githubUrl: "https://github.com/TharinduDakshina/car_Rental",
    },
    {
        title: "Car-sale- Sales the cars ",
        description: "I developed a mobile application for sale cars as a learning project. It allows users to browse vehicles, compare options, and complete transactions easily",
        image: "./images/car_sale.jpg",
        technologies: ["Flutter","Firebase"],
        githubUrl: "https://github.com/TharinduDakshina/Car-sale.git",
    },
]

const StyleMainBox = styled(Box)(()=>({
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: "grey.50"
}))

interface StyledTypographyProps extends TypographyProps {
    component?: string
}

const StyleTypography =styled(Typography)<StyledTypographyProps>(()=>({
    fontWeight: "bold",
    marginBottom: 48
}))

const StyleCard = styled(Card)(()=>({
    maxWidth:700,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-5px)" },
}))

const StyleTechnologyBox = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    gap: 0.5*8,
    marginBottom: 16
}))

const StyleCardAction = styled(CardActions)(() => ({
    padding: 16,
    paddingTop: 0
}))

export function Projects() {
    return (
        <StyleMainBox id="projects" >
            <Container maxWidth="lg">
                <StyleTypography variant="h3" component="h2" textAlign="center" gutterBottom >
                    Featured Projects
                </StyleTypography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid key={index}>
                            <StyleCard>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={200}
                                    height={300}
                                    style={{
                                        width:"auto",
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{pb:2}}>
                                        {project.description}
                                    </Typography>
                                    <StyleTechnologyBox >
                                        {project.technologies.map((tech, techIndex) => (
                                            <Chip key={techIndex} label={tech} size="small" variant="outlined" sx={{ fontSize: "0.75rem" }} />
                                        ))}
                                    </StyleTechnologyBox>
                                </CardContent>
                                <StyleCardAction >
                                    <Button size="small" startIcon={<GitHubIcon />} href={project.githubUrl} target="_blank">
                                        Code
                                    </Button>
                                </StyleCardAction>
                            </StyleCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyleMainBox>
    )
}
