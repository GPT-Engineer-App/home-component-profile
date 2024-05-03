import React from "react";
import { Container, Menu, MenuButton, MenuList, MenuItem, IconButton, Text, Box } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end" height="100vh">
      <Box alignSelf="flex-end">
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<FaUserCircle />} variant="outline" size="lg" />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">Welcome to Your Dashboard</Text>
      </Box>
    </Container>
  );
};

export default Index;
