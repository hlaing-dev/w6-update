import { useSelector } from "react-redux";

const withCounter = (WrapperCompo: any) => {
  const HOC = (props: any) => {
    const count = useSelector((state: any) => state.count.value);
    return <WrapperCompo {...props} count={count} />;
  };
  return HOC;
};

export default withCounter;
