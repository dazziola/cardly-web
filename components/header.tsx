import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Link,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const [user, loading] = useAuthState(auth);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            paddingY={4}
            paddingX={8}
            bg="white"
            borderBottomColor={"brand.light"}
            borderBottomWidth={4}
        >
            <Flex align="center">
                <Heading as="h1" letterSpacing={"tighter"} color={"black"}>
                    App
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Link
                    onClick={() => {
                        if (user) {
                            auth.signOut();
                        }
                    }}
                >
                    Logout
                </Link>
            </Box>
        </Flex>
    );
};

export default Header;
