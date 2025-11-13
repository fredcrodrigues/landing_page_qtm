import React from "react";
import { useRef, useEffect } from "react";
import { Box, Heading, Text, Container, Avatar, Stack, Flex, IconButton,  useBreakpointValue} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Juliana Nogueira",
    role: "CEO da QTM Healhtech",
    content:
      "Transformamos tecnologia em cuidado humano, com propósito e empatia.",
    avatar: "./assets/images/profile/profile_01.png"
  },
  {
    name: "Ádani Robson",
    role: "COO QTM Healthtech",
    content:
      "“Cada dado revela um novo caminho para cuidar melhor das pessoas.",
    avatar: "./assets/images/profile/profile_02.png",
  },
  {
    name: "Fredson Costa",
    role: "QTM Healthtech",
    content:
      "Criamos soluções que unem ciência, inovação e impacto real na saúde.",
    avatar: "./assets/images/profile/profile_03.png",
  },
 
];




function Clients() {
 const scrollRef = useRef(null);

  // Determina quantos cards mostrar com base no breakpoint
  const cardsToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth / cardsToShow;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
    
  };
    useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 90000); // muda de card a cada 3 segundos
    return () => clearInterval(interval);
  }, [cardsToShow]);

  return ( 
    <Box bg="gray.50" >
      <Container
             maxW={{ base: "container.sm", xl: "container.xl" }}
             py={{ base: "3rem", md: "6.5rem" }}
           >
        <Heading
                  as="h1"
                  size="h1"

                  pb={{ base: "3rem", md: "6.5rem" }}
                  textAlign={{ base: "center", md: "center" }}
                >
          Nosso propósito é cuidar
        </Heading>
        {/* Carrossel */}
        <Flex
          ref={scrollRef}
          overflowX="auto"
          scrollBehavior="smooth"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              flex={`0 0 ${100 / cardsToShow}%`} // responsivo
              px={10}
              paddingBottom={10}
            >
              <Box
                bg="white"
                p={4}
                rounded="2xl"
                shadow="md"
                textAlign="center"
                h="100%"
              >
                <Stack spacing={2} align="center">
                  <Avatar name={t.name} src={t.avatar} size="lg" />
                  <Text fontSize="md" color="gray.600" fontStyle="italic">
                    "{t.content}"
                  </Text>
                  <Box>
                    <Text fontWeight="bold">{t.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {t.role}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
          ))}
        </Flex>

      </Container>
    </Box>
    )
      

    
}

export default Clients