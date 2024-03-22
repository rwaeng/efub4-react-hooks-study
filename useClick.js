export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      // mount 되었을 때, componentDidMount
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      // componentWillUnMount
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };