import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Text,
    Link,
    Spinner,
    useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import NextLink from 'next/link'

import { errorMappings } from "../../components/errors";
import { useAuthState } from "react-firebase-hooks/auth";

interface FormValues {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user && !loading) {
            router.push('/dashboard');
        }
    }, [loading, user]);

    const router = useRouter();
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (submittedValues: FormValues) => {
            handleLogin(submittedValues);
        },
        validate: (values: FormValues) => {
            const errors: FormErrors = {};

            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 6) {
                errors.password =
                    "Password too short. Must be at least 6 characters long.";
            }
            return errors;
        },
    });

    const handleLogin = async (values: FormValues) => {
        try {
            setIsFormLoading(true);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const user = userCredential.user;
            console.log(userCredential);
            setIsFormLoading(false);
            router.push("/dashboard");
            console.log("sending", values);
        } catch (error: any) {
            console.error("sending", error);
            setErrorMessage(error.message);
            setIsFormLoading(false);
            toast({
                title: "There was an error logging in.",
                description:
                    errorMappings[error.code as keyof typeof errorMappings],
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={5}>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        disabled={isFormLoading}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <Text fontSize={"sm"} color="red.500">
                            {formik.errors.email}
                        </Text>
                    )}
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            type={showPassword ? "text" : "password"}
                            disabled={isFormLoading}
                        />
                        <InputRightElement h={"full"}>
                            <Button
                                disabled={isFormLoading}
                                variant={"ghost"}
                                onClick={() =>
                                    setShowPassword(
                                        (showPassword) => !showPassword
                                    )
                                }
                            >
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {formik.errors.password && formik.touched.password && (
                        <Text fontSize={"sm"} color="red.500">
                            {formik.errors.password}
                        </Text>
                    )}
                </FormControl>
                <Stack spacing={10} pt={2}>
                    <Button
                        loadingText="Submitting"
                        colorScheme="brand"
                        type={"submit"}
                        disabled={isFormLoading}
                        rightIcon={isFormLoading ? <Spinner /> : <></>}
                    >
                        Login
                    </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={"center"}>
                        Not yet a user?{" "}
                        <NextLink color={"blue.400"} className="underline" href="/register">
                            Register
                        </NextLink>
                    </Text>
                </Stack>
            </Stack>
        </form>
    );
}
