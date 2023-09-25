import styled from "styled-components";

export const StyledText = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
  fontFamily?: string;
  fontWeight?: string | number;
}>`
  white-space: pre-line;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${(props) => props.fontFamily && `font-family: ${props.fontFamily}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const UbuntuRegular = styled(StyledText)`
  font-family: "Ubuntu";
  font-weight: normal;
`;

export const UbuntuBold = styled(StyledText)`
  font-family: "Ubuntu";
  font-weight: bold;
`;

export const IndieFlowerRegular = styled(StyledText)`
  font-family: "IndieFlower";
  font-weight: normal;
`;
