import { Box, Text } from "@chakra-ui/react";

const Status = ({ colorMode, ipAddress, location, timezone, isp }) => {
  return (
    <>
      <Box
        w={{ base: "80%", md: "80%" }} 
        borderRadius="lg"
        position="absolute"
        top={{ base: "52", md: "52" }}
        left={{ base: "10", md: "40" }}
        background={colorMode === "light" ? "#fff" : "#1A1D23"}
        zIndex={500}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "4", md: "10" }}
        p={{ base: "4", md: "8" }}
      >
        <Box
          w="full"
          borderRight={{ md: "2px" }}
          borderColor={{ md: "gray.300" }}
          borderStyle="solid"
          display="flex"
          flexDirection="column"
          gap="2"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            color="gray.400"
            fontWeight="700"
          >
            IP Address
          </Text>
          <Text>{ipAddress}</Text>
        </Box>
        <Box
          w="full"
          borderRight={{ md: "2px" }}
          borderColor={{ md: "gray.300" }}
          borderStyle="solid"
          display="flex"
          flexDirection="column"
          gap="2"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            color="gray.400"
            fontWeight="700"
          >
            Location
          </Text>
          <Text>{location}</Text>
        </Box>
        <Box
          w="full"
          borderRight={{ md: "2px" }}
          borderColor={{ md: "gray.300" }}
          borderStyle="solid"
          display="flex"
          flexDirection="column"
          gap="2"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            color="gray.400"
            fontWeight="700"
          >
            Time Zone
          </Text>
          <Text>{timezone}</Text>
        </Box>
        <Box
          w="full"
          display="flex"
          flexDirection="column"
          gap="2"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            color="gray.400"
            fontWeight="700"
          >
            Isp
          </Text>
          <Text>{isp}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Status;
