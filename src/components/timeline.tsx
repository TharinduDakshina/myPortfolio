"use client"

import {Box, Card, CardContent, styled, Typography} from "@mui/material"
import { motion } from "framer-motion"
import {TimelineEvent} from "@/types/timeline";


interface TimelineProps {
    events: TimelineEvent[]
}

const MotionCard = motion(Card)
const MotionBox = motion(Box)

const StyleMainBox = styled(Box)(() => ({
    position: "relative",
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
}))

const StyleTimelineBox = styled(Box)(()=>({
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#404040",
    transform: "translateX(-50%)",
    zIndex: 1,
}))

export  function Timeline({ events }: TimelineProps) {
    return (
        <StyleMainBox>
            <StyleTimelineBox/>

            {/* Timeline Events */}
            <Box sx={{ position: "relative" }}>
                {events.map((event, index) => (
                    <MotionBox
                        key={event.id}
                        initial={{ opacity: 0, x: event.position === "left" ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        sx={{ position: "relative", mb: 6 }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "50%", pr: 4 }}>
                                {event.position === "left" && (
                                    <Box sx={{ textAlign: "right" }}>
                                        <TimelineCard event={event} />
                                    </Box>
                                )}
                            </Box>

                            <MotionBox
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 10,
                                }}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        backgroundColor: "primary.main",
                                        border: "4px solid #000000",
                                    }}
                                />
                            </MotionBox>

                            {/* Right Side Content */}
                            <Box sx={{ width: "50%", pl: 4 }}>
                                {event.position === "right" && (
                                    <Box sx={{ textAlign: "left" }}>
                                        <TimelineCard event={event} />
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </MotionBox>
                ))}
            </Box>
        </StyleMainBox>
    )
}

interface TimelineCardProps {
    event: TimelineEvent
}

function TimelineCard({ event }: TimelineCardProps) {
    const { date, title, highlight, description, position } = event

    // Replace the highlight text with highlighted version
    const highlightedTitle = title.includes(highlight) ? (
        <>
            {title.split(highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                        <span key={i}>
            {part}
                            <span style={{ color: "#f44336", fontWeight: "bold" }}>{highlight}</span>
          </span>
                    ) : (
                        <span key={i}>{part}</span>
                    ),
            )}
        </>
    ) : (
        title
    )

    return (
        <MotionCard
            sx={{
                backgroundColor: "background.paper",
                borderLeft: 4,
                borderLeftColor: position === "left" ? "primary.main" : "secondary.main",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }}
            whileHover={{ y: -2, scale: 1.02 }}
        >
            <CardContent sx={{ p: 3 }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: position === "left" ? "primary.main" : "secondary.main",
                        fontWeight: "medium",
                        mb: 1,
                    }}
                >
                    {date}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.primary",
                        mb: 1,
                        lineHeight: 1.6,
                    }}
                >
                    {highlightedTitle}
                </Typography>
                {description && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            lineHeight: 1.6,
                        }}
                    >
                        {description}
                    </Typography>
                )}

                {/* Side indicator */}
                <Typography
                    variant="caption"
                    sx={{
                        mt: 2,
                        display: "block",
                        color: position === "left" ? "primary.main" : "secondary.main",
                        fontWeight: "medium",
                    }}
                >
                    {position === "left" ? "◀ Personal Journey" : "Professional Path ▶"}
                </Typography>
            </CardContent>
        </MotionCard>
    )
}
