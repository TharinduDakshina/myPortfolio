"use client"

import { Box, Typography, Container } from "@mui/material"

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                backgroundColor: "grey.900",
                color: "white",
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2">© {new Date().getFullYear()} Tharindu Dakshina. All rights reserved.</Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
                    Built with Next.js, TypeScript & Material-UI
                </Typography>
            </Container>
        </Box>
    )
}
