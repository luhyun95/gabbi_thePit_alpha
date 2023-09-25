import * as React from "react";

type WindowState = {
  windowSize: { width: number; height: number };
  width: number;
  scrollPosition: number;
  isMobile: boolean;
};

const maxWidth = 1440;
const mobileWidth = 1000;

export const WindowContext = React.createContext<WindowState>({
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  width: Math.min(maxWidth, window.innerWidth),
  scrollPosition: 0,
  isMobile: false,
});

export const WindowProvider: React.FC<any> = ({ children }) => {
  //#region about windows
  const handleWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { width: innerWidth, height: innerHeight };
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [windowSize, setWindowSize] = React.useState(handleWindowSize());
  const [width, setWidth] = React.useState(
    Math.min(handleWindowSize().width, maxWidth)
  );
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const isMobile = React.useMemo<boolean>(() => width < mobileWidth, [width]);

  React.useEffect(() => {
    function handleWindowResize() {
      const windowSize = handleWindowSize();
      setWidth(Math.min(windowSize.width, maxWidth));
      setWindowSize(windowSize);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //#endregion

  const value = {
    windowSize,
    width,
    scrollPosition,
    isMobile,
  };

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
};
