import type { AppProps } from "next/app";

import {
    ColorModeScript,
    extendTheme,
    ChakraProvider,
    useEditable,
} from "@chakra-ui/react";

import CentredLayout from "../components/layouts/centeredLanding";
import DashboardLayout from "../components/layouts/dashboardLayout";
// import Header from "../components/Header";

import "@/styles/globals.css";
import "../styles/globals.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const colors = {
    brand: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        light: "#86efac",
        normal: "#22c55e",
        heavy: "#14532d",
        secondary: "#19D1C5",
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
