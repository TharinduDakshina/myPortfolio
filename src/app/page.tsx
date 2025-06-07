"use client"
import {Box} from "@mui/material";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {About} from "@/components/about";
import {Hero} from "@/components/hero";
import {Skills} from "@/components/skils";
import {Projects} from "@/components/projects";
import {Contact} from "@/components/contact";

export default function Home() {
    return (
        <Box>
            <Header/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </Box>);
}
