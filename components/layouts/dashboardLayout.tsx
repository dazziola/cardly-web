import {
    Flex,
    Box,
    Stack,
    useColorModeValue,
    useDisclosure,
    Link,
    Button,
} from "@chakra-ui/react";
import Logo from "../logo";
import Header from "../header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    const LinkComponent = () => <Link backgroundColor={"brand.200"} p={2} borderRadius={"lg"} w={"full"}>Test Link</Link>;

    return (
        <Flex
            direction={"column"}
            w={"100vw"}
            minH={"100vh"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack h={"100vh"} spacing={0}>
                <Header />
                <Flex h={"100%"} direction={{ md: "row", base: "column" }}>
                    <Stack
                        paddingY={4}
                        paddingX={4}
                        maxW={{ md: "xs", base: "100vw" }}
                        w={"full"}
                        borderRight={{ md: "4px solid", base: "none" }}
                        borderRightColor={{ md: "brand.light", base: "none" }}
                        backgroundColor={"brand.100"}
                    >
                        <LinkComponent />
                        <LinkComponent />
                        <LinkComponent />
                        <LinkComponent />
                        <LinkComponent />
                        <LinkComponent />
                    </Stack>
                    <Box paddingY={4} paddingX={8} w={"full"}>
                        Right
                    </Box>
                </Flex>
            </Stack>
        </Flex>
    );
}
