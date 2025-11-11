import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToken,
  useToast,
  Link,
} from "@chakra-ui/react";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from "phosphor-react";
import emailjs from "emailjs-com";

import LogoBlack from "assets/images/brand-logo/logo-color.svg";

function Footer() {
  const [blue400] = useToken("colors", ["blue.400"]);
  const form = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_yexa4yl", // substitua pelo seu Service ID
        "template_875it0z", // substitua pelo seu Template ID
        form.current,
        "fDQgL1VJi1iM0ZA-g" // substitua pelo seu Public Key
      )
      .then(
        (result) => {
          toast({
            title: "Mensagem enviada!",
            description: "Entraremos em contato em breve.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast({
            title: "Erro ao enviar mensagem",
            description: "Tente novamente mais tarde.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <Box bg="gray.100">
      <Container maxW={{ base: "container.sm", xl: "container.xl" }} py="5rem">
        <Stack
          direction={{ base: "column", xl: "row" }}
          alignItems="start"
          spacing="3.75rem"
        >
          <Stack direction={{ base: "column", sm: "row" }} spacing="3.75rem">
            <Stack direction="column" spacing="1.5rem">
              <Box py="0.25rem">
                <LogoBlack />
              </Box>
              <Text>Saúde, Consciência e Tecnologia</Text>
              <Stack direction="row" spacing="1rem">
                <Link href="https://instagram.com/" isExternal>
                  <InstagramLogo size={20} />
                </Link>
                <Link href="https://facebook.com/" isExternal>
                  <FacebookLogo size={20} weight="fill" />
                </Link>
              </Stack>
            </Stack>

            {/* Contatos */}
            <Stack direction="column" spacing="1.5rem">
              <Heading as="h3" size="h3">
                Contatos
              </Heading>
              <Stack direction="row" spacing="0.5rem">
                <Phone size={24} color={blue400} />
                <Text>+55 98 8331-8460</Text>
              </Stack>
              <Stack direction="row" spacing="0.5rem">
                <EnvelopeSimple size={24} color={blue400} />
                <Text>quantumtt.startup@gmail.com</Text>
              </Stack>
            </Stack>
          </Stack>

          {/* Formulário */}
          <Stack
            as="form"
            ref={form}
            onSubmit={sendEmail}
            direction="column"
            spacing="1.5rem"
            w="100%"
            maxW={{ base: "auto", xl: "517px" }}
          >
            <Heading as="h3" size="h3">
              Entre em Contato
            </Heading>
            <Input placeholder="Seu nome" name="user_name" bg="white" required />
            <Input placeholder="Seu email" name="user_email" bg="white" required />
            <Textarea
              placeholder="Sua mensagem"
              name="message"
              bg="white"
              resize="none"
              required
            />
            <Box>
              <Button
                colorScheme="blue"
                type="submit"
                isLoading={loading}
                loadingText="Enviando..."
              >
                Enviar
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Divider borderColor="gray.400" />
      <Container maxW="container.xl" py="1.25rem" textAlign="center">
        ©2025 QTM Healthtech, todos os direitos reservados
      </Container>
    </Box>
  );
}

export default Footer;
