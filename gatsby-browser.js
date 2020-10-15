import React from "react";
import Layout from "./src/components/layout";

require("prismjs/themes/prism-tomorrow.css")

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}