import {
    Flex,
    Box,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../logo";

export default function CenteredLanding({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} w={"xl"} minW={"sm"} maxW={"xl"} py={12} px={6}>
                <Stack align={"center"}>
                    <Logo size="large" />
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    {children}
                </Box>
            </Stack>
        </Flex>
    );
}
    