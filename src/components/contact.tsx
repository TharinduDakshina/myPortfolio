"use client"

import type React from "react"

import { useState } from "react"
import {Box, Typography, Container, Grid, TextField, Button, Paper, IconButton, styled, Snackbar} from "@mui/material"
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Facebook as Facebook,
} from "@mui/icons-material"
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import {TypographyProps} from "@mui/system";

const StyleMainBox  = styled(Box)(()=>({
    paddingTop:80,
    paddingBottom:80,
}))

interface StyledTypographyProps extends TypographyProps {
    component?: string
}

const StyleTypographyMainTitle = styled(Typography)<StyledTypographyProps>(()=>({
    fontWeight: "bold",
    marginBottom: 48
}))

const StyleTypographySecondTitle = styled(Typography)(()=>({
    fontWeight: "bold",
    marginBottom: 24
}))


const StyleTypographyParagraph = styled(Typography)(()=>({
    fontSize: "1.1rem",
    lineHeight: 1.8
}))

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // Replace with your EmailJS service ID, template ID, and public key
            const result = await emailjs.send(
                'service_xyoou2b',     // Get from EmailJS dashboard
                'template_p6bogbn',    // Create template in EmailJS
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    // Add other form fields as needed
                },
                'BS7mx4Q9tarev9YNi'      // Get from EmailJS dashboard
            );

            console.log('Email sent successfully:', result.text);

            setAlertType('success');
            setAlertMessage('Message sent successfully!');
            setShowAlert(true);

            // Reset form or redirect
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Failed to send email:', error);
            setAlertType('error');
            setAlertMessage('Failed to send message. Please try again.');
            setShowAlert(true);
        }
    }

    return (
        <StyleMainBox id="contact">
            <Container maxWidth="lg">
                <StyleTypographyMainTitle variant="h3" component="h2" textAlign="center" gutterBottom>
                    Get In Touch
                </StyleTypographyMainTitle>
                <Grid container spacing={6}>
                    <Grid>
                        <StyleTypographySecondTitle variant="h5" gutterBottom >
                            Let&#39;s work together
                        </StyleTypographySecondTitle>
                        <StyleTypographyParagraph variant="body1" paragraph sx={{  }}>
                            I&#39;m always interested in new opportunities and exciting projects. Whether you have a question or just want
                            to say hi, feel free to reach out!
                        </StyleTypographyParagraph>

                        <Box sx={{ mb: 4 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
                                <Typography variant="body1">tharindudakshina527@gmail.com</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
                                <Typography variant="body1">+94 761339805</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <LocationIcon sx={{ mr: 2, color: "primary.main" }} />
                                <Typography variant="body1">Galle, Sri Lanka</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton color="primary" href="https://www.linkedin.com/in/tharindudakshina" target="_blank">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton color="primary" href="https://github.com/TharinduDakshina" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton color="primary" href="https://www.facebook.com/tharindudakshina.dakshina" target="_blank">
                                <Facebook />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid >
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 3 }}>
                                    Send Message
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar
                open={showAlert}
                autoHideDuration={6000}
                onClose={() => setShowAlert(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setShowAlert(false)}
                    severity={alertType}
                    variant="outlined"
                >
                    {alertMessage}
                </Alert>
            </Snackbar>


        </StyleMainBox>
    )
}
