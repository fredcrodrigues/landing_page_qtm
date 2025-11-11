import React from "react";

import {
  Broadcast,
  ChartLine,
  CurrencyCircleDollar,
  DesktopTower,
  Calendar,
  VideoCamera,
  Planet,
  MapPin,
  Buildings
  
} from "phosphor-react";
import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import FeatureCell from "./FeatureCell";

const features_patient = [
  {
    icon: <Calendar />,
    heading: "Agende suas Sessões",
    text: "Marque suas sessões com facilidade, no momento que for melhor para você.",
  },
  {
    icon: <VideoCamera />,
    heading: "Terapia online",
    text: "Conecte-se com profissionais qualificados sem sair de casa. Simples, seguro e acolhedor.",
  },
  {
    icon: <MapPin />,
    heading: "Encontre terapias",
    text: "Profissionais qualificados perto de você, com agendamento simples.",
  },

];
const features_teraphist = [
  
  {
    icon: <Buildings />,
    heading: "Centro de Terapias",
    text: "Disponibilize seu espaço de atendimento como terapeuta",
  },
  {
    icon: <DesktopTower />,
    heading: "For all devices",
    text: "Get organized on all devices",
  },
];

function FeatureGrid() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3rem", md: "6.5rem" }}
    >
      <VStack spacing={{ base: "3rem", md: "7.5rem" }}>
        {/* Heading */}
        <VStack
          spacing="1rem"
          alignItems={{ base: "start", md: "center" }}
          textAlign={{ base: "start", md: "center" }}
        >
          <Heading as="h1" size="h1">
           Inicie sua jornada de cuidado
          </Heading>
          <Text lineHeight="1.5"> 
            Mais que um app, um espaço para cuidar de você que é Paciente e auxiliar você que é Terapeuta
          </Text>
        </VStack>
        {/* Grid */}
        
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "3rem", md: "5rem", xl: "7.5rem" }}
          maxW="57rem">
          {features_patient .map((feature, index) => (
            <FeatureCell key={`feature-${index}`} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
      
    </Container>
  );
}

export default FeatureGrid;
