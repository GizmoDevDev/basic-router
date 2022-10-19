import {Link} from "react-router-dom";

export const NotFound = () => {
  return <>
    <p>Ops, we found nothing</p>
    <button type="button">
      <Link to="/">Main page</Link>
    </button>
  </>
}