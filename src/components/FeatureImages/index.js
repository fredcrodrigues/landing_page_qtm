import React from "react";

import { EnvelopeSimple } from "phosphor-react";
import { Box, Circle, Container, Heading, VStack } from "@chakra-ui/react";

import DonateOverlay from "./DonateOverlay";
import Feature from "./Feature";
import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";

function FeatureImages() {
  return (
    <Box layerStyle="gradientBg">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3rem", md: "6.5rem" }}
      >
        <Heading
          as="h1"
          size="h1"
          color="white"
          pb={{ base: "3rem", md: "6.5rem" }}
          textAlign={{ base: "start", md: "center" }}
        >
          Benefícios ao terapeuta
        </Heading>
        <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
          <Feature
            heading="Visualize seu faturamento facilmente"
            text="Terapeuta, acompanhe com clareza seus ganhos, relatórios e recebimentos em um só lugar."
            imageSrc="assets/images/features/feature-image-03.png"
            imageAlt="Feature Image 1"
            to="/"
          >
            <Parallax position="absolute" top="-1rem" left="-1rem">
              <DonateOverlay />
            </Parallax>
          </Feature>
          <Feature
            heading="Otimize seu processo de Atendimentos"
            text="Cada sessão garante privacidade e segurança, promovendo um ambiente de confiança e proximidade. Além disso, o histórico de atendimentos e o acompanhamento contínuo permitem observar a evolução do bem-estar, tornando o cuidado mais organizado e eficiente, tanto para o paciente quanto para o terapeuta."
            imageSrc="assets/images/features/feature-image-04.png"
            imageAlt="Feature Image 2"
            reverse={true}
            to="/"
          >
            <HoverBadge
              borderRadius="0.75rem"
              p="1rem"
              fontSize="32px"
              position="absolute"
              top="-1rem"
              right="-1rem"
            >
              <EnvelopeSimple />
              <Circle
                size="0.75rem"
                bg="blue.400"
                position="absolute"
                top="1rem"
                right="0.85rem"
                border="2px"
                borderColor="white"
              />
            </HoverBadge>
          </Feature>
        </VStack>
      </Container>
    </Box>
  );
}

export default FeatureImages;
