import { Heading, Text, Button, Stack } from "@chakra-ui/react";

import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Page() {

    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user && !loading) {
            router.push('/dashboard');
        }
    }, [loading, user]);

    return (
        <Stack spacing={8} align={"center"} textAlign={"center"}>
            <Heading
                fontWeight={600}
                fontSize={{ base: "2xl" }}
                lineHeight={"100%"}
                variant={"h2"}
            >
                Get critiqued, not{" "}
                <Text as={"span"} color={"brand.normal"}>
                    crit-eeked!
                </Text>
            </Heading>
            <Heading
                fontWeight={"normal"}
                fontSize={{ base: "xl" }}
                variant={"h3"}
            >
                Manage and receive timely feedback from stakeholders for a wide
                range of projects.
            </Heading>
            <Stack
                minW={"full"}
                direction={"row"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
            >
                <Button
                    w={"full"}
                    colorScheme="brand"
                    px={6}
                    onClick={() => router.push("/register")}
                >
                    Register
                </Button>
                <Button
                    w={"full"}
                    colorScheme={"brand"}
                    variant={"outline"}
                    px={6}
                    onClick={() => router.push("/login")}
                >
                    Login
                </Button>
            </Stack>
        </Stack>
    );
}
