import React from 'react'
import { Link } from "gatsby";

const MyLink = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <Link to={to} {...other}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default MyLink;