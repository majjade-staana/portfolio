"use client"

import { motion } from "framer-motion";
import { Container } from "./UIElements";

export default function ContactUnderConstruction() {

    return (
        <Container className="text-center !max-w-3xl py-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 w-64 mx-auto md:w-full">
            🚧 Contact Page - Under Construction 🚧
            </h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg mb-4"
            >
            {`This page isn’t quite ready yet—but don’t worry, a shiny new contact
            form is on its way! Soon you’ll be able to send me a message directly
            here without leaving the site.`}
            </motion.p>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg mb-4"
            >
            {`For now, the best way to reach me is by email or through my social
            media links below. Whether it’s for a project idea, collaboration, or
            just to say hi—I’d love to hear from you.`}
            </motion.p>

            

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg"
            >
            {`Thanks for dropping by, and check back soon for the full contact
            experience 🚀`}
            </motion.p>
        </Container>
    )
}