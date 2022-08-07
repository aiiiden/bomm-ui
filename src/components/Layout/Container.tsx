import React from "react";
import styled, { StyledComponent, ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface IContainerProps extends React.HTMLProps<HTMLDivElement> {}

const StyledDiv = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${(props) => props.theme.spacing.unit * 4}px;
`;

const Container: React.FC<IContainerProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv className={className} style={style}>
        {children}
      </StyledDiv>
    </ThemeProvider>
  );
};

export default Container;
