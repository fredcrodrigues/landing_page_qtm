import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import LogoWhite from "assets/images/brand-logo/logo-qtm.svg";
import MobileNav from "./MobileNav";

function NavBar() {
  
  const [navLinks] = useState([
    { name: "Início", path: "inicio" },
    { name: "Serviços", path: "servicos" },
    { name: "Resultados", path: "resultados" },
    { name: "Contato", path: "contato" },
  ]);

  return (
    <Box layerStyle="gradientBg" position="fixed" top="0" w="100%" zIndex="1000">
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          {/* Logo e links */}
          <HStack spacing="6rem">
            <ScrollLink to="inicio" smooth={true} duration={500} offset={-80}>
              <LogoWhite />
            </ScrollLink>

            <Show above="lg">
              <HStack spacing="5.25rem">
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.to}
                    to={link.path}
                    smooth={true}
                    duration={600}
                    offset={-80} // ajusta conforme altura da navbar
                  >
                    <Button
                      variant="link"
                      colorScheme="whiteAlpha"
                      color="white"
                      _hover={{ textDecoration: "none", color: "blue.100" }}
                    >
                      {link.name}
                    </Button>
                  </ScrollLink>
                ))}
              </HStack>
            </Show>
          </HStack>

         
          {/*<Show above="lg">
            <Button
              colorScheme="blue"
              bgGradient="linear(to-r, #29B1D6, #A54FB0)"
              color="white"
              _hover={{ opacity: 0.9 }}
            >
              Baixar
            </Button>
          </Show>*/} 
        

          <MobileNav links={navLinks} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
