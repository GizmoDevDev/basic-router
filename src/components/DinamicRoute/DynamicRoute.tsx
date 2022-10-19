import {useParams} from "react-router-dom";

export const DynamicRoute = () => {
  const {name} = useParams();
  return <>
    <h1>Dynamic Route</h1>
    <h3>Hello, {name}</h3>
  </>
}