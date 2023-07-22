import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullscreenSection from "./FullscreenSection";

const greeting = "Hello, I am Namrata!";
const bio1 = "A software engineer";
const bio2 = "learning React";

const LandingSection = () => (
  <FullscreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="https://i.pravatar.cc/150?img=25"
          size="2xl"
          name="Your Name"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h4" size="l" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h4" size="l" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullscreenSection>
);

export default LandingSection;
