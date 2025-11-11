import React from "react";

import { IconButton, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5598983318460" // coloque seu número com DDI e DDD
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
        shadow="lg"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.1)",
          shadow: "2xl",
        }}
      />
    </Link>
  );
}

export default WhatsAppButton;