"use client"
import {Box} from "@mui/material";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {About} from "@/components/about";
import {Hero} from "@/components/hero";
import {Skills} from "@/components/skils";
import {Projects} from "@/components/projects";
import {Contact} from "@/components/contact";
import {Timeline} from "@/components/timeline";
import {TimelineEvent} from "@/types/timeline";

const events: TimelineEvent[] = [
    {
        id: "1",
        date: "Present",
        title: "A final year Computer Science undergraduate - UCSC",
        highlight: "UCSC",
        description: "Studied Middleware Architecture, Software Project Management, Mobile Application Development and " +
            " Systems and Network Administration",
        position: "left",
    },
    {
        id: "2",
        date: "Dec 2025 - June 2025",
        title: "Internship - Fcode Labs",
        highlight: "Fcode Labs",
        description: "Contributed to full-stack development in a real-world Agile environment.",
        position: "right",
    },
    {
        id: "3",
        date: "2021 - 2025",
        title: "Got selected for the Computer Science degree - UCSC",
        highlight: "UCSC",
        description: "Started my journey in computer science",
        position: "left",
    },
    {
        id: "4",
        date: "2021 - 2022",
        title: "Followed GDSE Course Module - IJSE",
        highlight: "IJSE",
        description: "Learned web application development, architecture patterns, and core software engineering concepts.",
        position: "right",
    },
    {
        id: "5",
        date: "2018",
        title: "President Scout",
        highlight: "",
        description: "Led and organized scout activities, fostering leadership, teamwork, and community service among members.",
        position: "left",
    },
    {
        id: "6",
        date: "2004 - 2018",
        title: "Primary & Higher Education - SCG",
        highlight: "SCG",
        description: "Studied Siridhamma College, Galle and Completed G.C.E. Advanced Level examination in the Common stream(Combined-Maths, Physics and ICT)",
        position: "right",
    },
]

export default function Home() {

    return (
        <Box>
            <Header/>
            <Hero/>
            <About/>
            <Timeline events={events}/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </Box>);
}
