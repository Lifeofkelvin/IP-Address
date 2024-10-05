import { Box, useColorMode } from "@chakra-ui/react";
import Header from "./Components/Header";
import Status from "./Components/Status";
import { useEffect, useState } from "react";
import Map from "./Components/Map";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.5035,
    lng: 77.67215,
  });

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_TxbN77cpYhaDqvFMck0w5dKteJNn5&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIPAddress(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        setCoordinates({ lat: data.location.lat, lng: data.location.lng });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);
  return (
    <>
      <Box position={"relative"}>
        <Header
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          setIPAddress={setIPAddress}
          fetchLocation={fetchLocation}
        />
        <Status
          ipAddress={IPAddress}
          location={location}
          timezone={timezone}
          isp={ISP}
          colorMode={colorMode}
        />
        <Map coordinates={coordinates} />
      </Box>
    </>
  );
}

export default App;
