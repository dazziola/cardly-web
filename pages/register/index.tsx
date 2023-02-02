import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Text,
    Spinner,
    useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { errorMappings } from "../../components/errors";
import { useAuthState } from "react-firebase-hooks/auth";

interface FormValues {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
}

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormLoading, setIsFormLoading] = useState(false);

    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
        onSubmit: (submittedValues: FormValues) => {
            handleSignUp(submittedValues);
        },
        validate: (values: FormValues) => {
            const errors: FormErrors = {};

            if (!values.firstName) {
                errors.firstName = "First name is required";
            } else if (values.firstName.length < 2) {
                errors.firstName =
                    "First name is too short. Must be at least 2 characters long.";
            }

            if (!values.lastName) {
                errors.lastName = "Last name is required";
            } else if (values.lastName.length < 2) {
                errors.lastName =
                    "Last name is too short. Must be at least 2 characters long.";
            }

            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.username) {
                errors.username = "Required";
            } else if (values.username.length < 4) {
                errors.username =
                    "Username too short. Must be at least 4 characters long.";
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

    useEffect(() => {
        if (user && !loading) {
            router.push('/dashboard');
        }
    }, [loading, user]);

    const handleSignUp = async (values: FormValues) => {
        try {
            console.log('handleSignUp');
            setIsFormLoading(true);
            const userCredential = await createUserWithEmailAndPassword(
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
                title: "There was an error registering.",
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
                <Stack direction={{ base: "column", sm: "row" }}>
                    <Box w={"full"}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                disabled={isFormLoading}
                            />
                        </FormControl>
                    </Box>
                    <Box w={"full"}>
                        <FormControl id="lastName" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                disabled={isFormLoading}
                            />
                        </FormControl>
                    </Box>
                </Stack>
                {formik.errors.firstName && formik.touched.firstName && (
                    <Text fontSize={"sm"} color="red.500">
                        {formik.errors.firstName}
                    </Text>
                )}
                {formik.errors.lastName && formik.touched.lastName && (
                    <Text fontSize={"sm"} color="red.500">
                        {formik.errors.lastName}
                    </Text>
                )}

                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        disabled={isFormLoading}
                    />
                    {formik.errors.username && formik.touched.username && (
                        <Text fontSize={"sm"} color="red.500">
                            {formik.errors.username}
                        </Text>
                    )}
                </FormControl>
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
                        Sign up
                    </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={"center"}>
                        Already a user?{" "}
                        <NextLink color={"blue.400"} className="underline" href="/login">
                            Login
                        </NextLink>
                    </Text>
                </Stack>
            </Stack>
        </form>
    );
}
