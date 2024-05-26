import React, { useEffect, useRef, useState } from 'react'
import { MessageText, PromotionsContainer } from '../../styles/promotions'
import { Box, Slide } from '@mui/material'

const messages = [
    "20% off your first order, use promo code 'FIRST'",
    "Summer sale starts now , Hurry up and order!",
    "Find what you need with ease"
]

export default function Promotions() {
    const containerRef = useRef()
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true)

            setTimeout(() => {
                setShow(false);
            }, 3000);
        }, 4000);
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <PromotionsContainer ref={containerRef}>
            <Slide
                container={containerRef.current}
                direction={show ? "left" : "right"} in={show}
                timeout={{
                    enter: 500,
                    exit: 450
                }}
            >

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>

        </PromotionsContainer>
    )
}
