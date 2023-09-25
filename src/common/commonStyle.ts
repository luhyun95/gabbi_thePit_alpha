import styled from "styled-components";
import Colors from "./colors";

export const SizedBoxW = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 100%;
`;

export const SizedBoxH = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

export const SizedBox = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.div<{
  width?: number;
  height?: number;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
`;

export const FlexColumn = styled.div<{
  width?: number;
  height?: number;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: column;
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
`;

export const Fill = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

export const Circle = styled.div<{
  width: number;
  height: number;
  backgroundColor?: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.neutralWhite};
  border-radius: 50%;
  overflow: hidden;
`;

export const RoundedFilledInput = styled.input<{
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
}>`
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};

  border: none;
  padding: 12px 35px;

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.neutralWhite};
  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 27.5px;

  color: ${(props) => (props.color ? props.color : Colors.neutralBlack)};
  font-family: "IBMPlexSansKR";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RoundedFilledButton = styled.button<{
  width?: number;
  height?: number;
  color?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};

  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 20px;

  background: ${(props) => (props.color ? props.color : Colors.brand)};
`;

export const RoundedFilled = styled.div<{
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}>`
  padding: 0;
  border: none;

  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};

  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 20px;

  color: ${(props) => (props.color ? props.color : Colors.neutralWhite)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.brand};
`;

export const NoOpacityButton = styled.button<{
  width?: number;
  height?: number;
}>`
  padding: 0;
  border: none;
  background-color: transparent;

  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
`;

export const NoOpacityInput = styled.input<{
  width?: number;
  height?: number;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
}>`
  padding: 0;
  border: none;
  background-color: transparent;

  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};

  color: ${(props) => (props.color ? props.color : Colors.neutralBlack)};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Ubuntu")};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  text-align: left;
`;

export const Span = styled.span`
  margin: auto;
`;

export const SizedImage = styled.img<{
  width?: number;
  height?: number;
  objectFit?: string;
  overflow?: string;
}>`
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.objectFit && `object-fit: ${props.objectFit}`};
  ${(props) => props.overflow && `overflow: ${props.overflow}`};
`;
