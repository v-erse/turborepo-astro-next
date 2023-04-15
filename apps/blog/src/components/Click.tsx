import { Button } from "ui";

/*
    This is here because a React component imported into an Astro page can't
    directly be passed a function as a prop, since functions aren't serializable.
*/

export default function Click() {
  return <Button onClick={() => console.log("hello")} />;
}
