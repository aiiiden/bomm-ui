import React from "react";

import Container from "./Container";

export default {
  component: Container,
  title: "Container",
};

const exampleStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
};

const Template = () => (
  <Container style={exampleStyle}>
    dasdas
    <Container style={exampleStyle}>
      dsadsa
      <Container style={exampleStyle}>dsadsa</Container>
    </Container>
  </Container>
);

export const Default = Template.bind({});
