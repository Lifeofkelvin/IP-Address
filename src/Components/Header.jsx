import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ArrowIcon from "/assests/icon-arrow.svg";
import { useState } from "react";

const Header = ({
  colorMode,
  toggleColorMode,
  setIPAddress,
  fetchLocation,
}) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {
    setIPAddress(ipAddress);
    fetchLocation(ipAddress);
  };
  return (
    <>
      <Box
        bgImage={{
          base: "url(/assests/pattern-bg-mobile.png)",
          md: "url(/assests/pattern-bg-desktop.png)",
        }}
        bgSize="cover"
        bgPosition="center"
        height={{ base: "40vh", md: "35vh" }}
        width="100vw"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"right"}
          alignItems={"end"}
          w={"100%"}
          p={"10px 20px"}
        >
          <Button
            onClick={toggleColorMode}
            p={"2px 10px"}
            borderRadius={"20px"}mr={'15px'}
          >
            {colorMode === "light" ? (
              <MoonIcon fontSize="15px" />
            ) : (
              <SunIcon fontSize="15px" />
            )}
            Dark Mode
          </Button>
        </Flex>
        <Heading textAlign={"center"} fontSize={{ base: "20px", md: "25px" }}>
          IP Address Tracker
        </Heading>
        <Flex
          mt={"20px"}
          w={{ base: "90%", md: "50%", lg: "33%" }}
          h={{ base: "40px", md: "50px"}}
          justifyContent="space-between"
          alignItems="center"
          background={colorMode === "light" ? "#fff" : "#1A1D23"}
          borderRadius={"15px"}
        >
          <Input
            type="text"
            w={{ base: "80%", md: "80%", lg: "85%" }}
            h="full"
            borderRadius="md"
            borderColor="gray.200"
            bg="gray.50"
            px="3"
            py="2"
            fontSize="sm"
            placeholder="Enter the IP Address here.."
            onChange={(e) => setIpAddress(e.target.value)}
            background={"transparent"}
            focusBorderColor={"transparent"}
            cursor={"pointer"}
            border={"none"}
            outline={"none"}
          />
          <Button
            bg="black"
            w="16"
            h="full"
            borderRadius="0px 12px 12px 0px"
            cursor="pointer"
            onClick={handleClick}
          >
            <Image src={ArrowIcon} alt="arrow-icon" boxSize="4" />
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
