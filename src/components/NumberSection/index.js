import React from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser, FaUserMd, FaMapMarkedAlt } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

function NumbersSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const [patients, setPatients] = useState(0);
  const [therapists, setTherapists] = useState(0);
  const [states, setStates] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const animateCounter = (setter, target) => {
      let count = 0;
      const increment = Math.ceil(target / 50);
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 40);
    };

    animateCounter(setPatients, 50);
    animateCounter(setTherapists, 250);
    animateCounter(setStates, 6);
  };

  return (
    <Box
      ref={sectionRef}
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={{ base: 6, md: 16 }}
      textAlign="center"
      id="numeros"
      layerStyle="gradientBg"
    > 
    <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
            <VStack spacing="2rem">
              <Heading as="h1" size="h1">
                  Nossos Números
              </Heading>
              <Text></Text>
            </VStack>
    </VStack>

    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyItems="center">
        <StatCard
          icon={FaUser}
          label="Pacientes Cadastrados"
          value={patients}
         
          
        />
        <StatCard
          icon={FaUserMd}
          label="Terapeutas na Plataforma"
          value={therapists}
          
        />
        <StatCard
          icon={FaMapMarkedAlt}
          label="Estados Atingidos"
          value={states}
         
        />
      </SimpleGrid>
    </Box>
  );
}

function StatCard({ icon: Icon, label, value,   }) {
  return (
    <VStack
      w="263px"
      bg="white"
      p="2rem"
      borderRadius="1.75rem"
      fontWeight="700"
      spacing="1.25rem"
      boxShadow="2xl"
      transform="auto"
      _dark={{ bg: "gray.700" }}
      transition="0.4s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Box 
        bgGradient="linear(to-r, #29B1D6, #A54FB0)"
        borderRadius="full"
        p="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
      >
      
        <Icon size="40px" />
      </Box>
      <Text fontSize="3xl"   bgGradient="linear(to-r, #29B1D6, #A54FB0)" fontWeight="bold"  bgClip="text">
        {value.toLocaleString("pt-BR")}
      </Text>
      <Text fontSize="md" color="gray.600" _dark={{ color: "gray.300" }}>
        {label}
      </Text>
    </VStack>
  );
}

export default NumbersSection;