import {
    Flex,
    Box,
    Stack,
    useColorModeValue,
    useDisclosure,
    Link,
    Button,
    ComponentWithAs,
    IconProps,
} from "@chakra-ui/react";
import Logo from "../logo";
import Header from "../header";
import { AddIcon } from "@chakra-ui/icons";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    const LinkComponent = ({ label, href }: { label: string, href: string }) => (
        <Link key={label}
            textAlign={"left"}
            backgroundColor={"white"}
            p={2}
            borderRadius={"lg"}
            w={"full"}
            href={href}
        >
            {label}
        </Link>
    );

    return (
        <Flex
            direction={"column"}
            w={"100vw"}
            minH={"100vh"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack h={"100vh"} spacing={0}>
                <Header />
                <Stack
                    px={4}
                    h={"100%"}
                    direction={{ md: "row", base: "column" }}
                >
                    <Stack
                        maxW={{ md: "xs", base: "100vw" }}
                        w={"full"}
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={4}
                    >
                        <LinkComponent label={"Questions"} href="dashboard/questions" />
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={4}
                        w={"full"}
                    >
                        {children}
                    </Box>
                </Stack>
            </Stack>
        </Flex>
    );
}
