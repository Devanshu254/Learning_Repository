import React from "react";
import { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1: Run on every render.
  useEffect(() => {
    alert("Hey I will run on every render.");
  });

  // Case 2: Run only on first render.
  useEffect(() => {
    alert("Hey welcome to the page. This is first render.");
  }, []);

  // Case 3: Run only when certain values changed.
  useEffect(() => {
    alert("Hey I am running because color was changed.");
  }, [color]);
  return <div>I am navbar of {color} color hehe..</div>;
};

export default Navbar;
