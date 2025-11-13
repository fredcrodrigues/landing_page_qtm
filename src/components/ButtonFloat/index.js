import React from "react";
import { keyframes } from "@emotion/react";
import { IconButton, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

// Animação de brilho verde pulsante
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #25D366, 0 0 10px #25D366, 0 0 20px #25D366;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 10px #25D366, 0 0 20px #25D366, 0 0 30px #25D366;
    transform: scale(1.08);
  }
  100% {
    box-shadow: 0 0 5px #25D366, 0 0 10px #25D366, 0 0 20px #25D366;
    transform: scale(1);
  }
`;

function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5598983318460"
      isExternal
      position="fixed"
      bottom="24px"
      right="24px"
      zIndex="1000"
      _hover={{ textDecoration: "none" }}
    >
      <IconButton
        aria-label="Fale conosco no WhatsApp"
        icon={<FaWhatsapp size={28} />}
        colorScheme="whatsapp"
        borderRadius="full"
        size="lg"
        bg="#25D366"
        color="white"
        animation={`${glow} 4s infinite ease-in-out`}
        _hover={{
          transform: "scale(1.0)",
          boxShadow:
            "0 0 25px #25D366, 0 0 50px #25D366, 0 0 80px #25D366",
        }}
      />
    </Link>
  );
}

export default WhatsAppButton;
