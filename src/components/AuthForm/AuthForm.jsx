import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  WrapItem,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertDescription,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <Flex
      flex={1}
      w={"full"}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box py={8} borderRadius={"2px"} border={"1px solid grey "}>
        <VStack
          gap={4}
          w={"full"}
          px={{ base: "6", md: "4" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Text
              fontWeight={"700"}
              fontSize={"32px"}
              fontFamily={"sans-serif"}
            >
              Sign Up
            </Text>
          </Box>

          <Input
            type="email"
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
            variant="filled"
            placeholder="Email"
            focusBorderColor="pink.400"
            value={inputs.email}
          />
          <Input
            type="text"
            onChange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
            variant="filled"
            placeholder="Username"
            focusBorderColor="pink.400"
            value={inputs.username}
          />
          <Input
            type="text"
            onChange={(e) => {
              setInputs({ ...inputs, fullName: e.target.value });
            }}
            variant="filled"
            placeholder="Full Name"
            focusBorderColor="pink.400"
            value={inputs.fullName}
          />
          <InputGroup>
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
              variant="filled"
              focusBorderColor="pink.400"
              value={inputs.password}
            />

            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            colorScheme="twitter"
            w={"100%"}
            isLoading={null}
            onClick={() => signup(inputs)}
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};
export default AuthForm;
