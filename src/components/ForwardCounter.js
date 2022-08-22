import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // every component will receive its own state.

  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
