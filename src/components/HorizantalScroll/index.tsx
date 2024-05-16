import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const ItemWrapper = styled.div`
  min-width: max-content;
`;
interface SafeHTMLDivElement extends HTMLDivElement {
  scrollWidth: number;
  scrollLeft: number;
  clientWidth: number;
}
interface IHorizanatalScroll {
  children: React.ReactNode;
  width?: string;
}
const HorizantalScroll = ({ children, width }: IHorizanatalScroll) => {
  const scrollRef = React.useRef<SafeHTMLDivElement>(null);
  const [isDisableLeftArrow, setIsDisableLeftArrow] = useState(true);
  const [isDisableRightArrow, setIsDisableRightArrow] = useState(false);
  const handleScrollRight = () => {
    scrollRef.current?.scrollBy(100, 0);

    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setIsDisableRightArrow(scrollLeft + clientWidth + 1 > scrollWidth);
      setIsDisableLeftArrow(scrollRef?.current?.scrollLeft === 0);
    }
  };
  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy(-100, 0);
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setIsDisableRightArrow(scrollLeft + clientWidth + 1 > scrollWidth);
      setIsDisableLeftArrow(scrollRef?.current?.scrollLeft === 0);
    }
  };
  return (
    <Stack alignItems="center" direction="row">
      <IconButton onClick={handleScrollLeft} disabled={isDisableLeftArrow}>
        <ArrowCircleLeftIcon
          color={isDisableLeftArrow ? "disabled" : "primary"}
          fontSize="large"
        />
      </IconButton>

      <Stack
        width={width || "100%"}
        overflow="hidden"
        direction="row"
        paddingX={2}
        ref={scrollRef}
        spacing={5}
      >
        {React.Children.map(children, (child) => (
          <ItemWrapper>{child}</ItemWrapper>
        ))}
      </Stack>

      <ArrowCircleRightIcon
        onClick={handleScrollRight}
        color={isDisableRightArrow ? "disabled" : "primary"}
        fontSize="large"
      />
    </Stack>
  );
};

export default HorizantalScroll;
