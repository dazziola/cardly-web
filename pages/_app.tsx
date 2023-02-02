import type { AppProps } from "next/app";

import {
    ColorModeScript,
    extendTheme,
    ChakraProvider,
    useEditable,
} from "@chakra-ui/react";

import CentredLayout from "../components/layouts/centeredLanding";
import DashboardLayout from "../components/layouts/dashboardLayout";
import Header from "../components/Header";

import "@/styles/globals.css";
import "../styles/globals.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const colors = {
    brand: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        light: "#d8b4fe",
        normal: "#9333ea",
        heavy: "#581c87",
    },
};

const theme = extendTheme({
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    colors,
});

const LayoutRenderer = ({ children, user }: { children: any; user?: any }) => {
    if (user) {
        return <DashboardLayout>{children}</DashboardLayout>;
    }
    return <CentredLayout>{children}</CentredLayout>;
};

export default function App({ Component, pageProps }: AppProps) {
    const [user, loading] = useAuthState(auth);

    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <LayoutRenderer user={user}>
                <Component {...pageProps} />
            </LayoutRenderer>
        </ChakraProvider>
    );
}
