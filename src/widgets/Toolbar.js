import React from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

export default ({ info }) => {
  const { title, links } = info;
  let current = links.pop();

  return (
    <div>
      <Typography color="textSecondary" gutterBottom variant="h2">
        {title}
      </Typography>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {links?.map(({ name, href }) => (
          <Link color="inherit" href={href}>
            {name}
          </Link>
        ))}

        <Link color="textPrimary">{current.name}</Link>
      </Breadcrumbs>
    </div>
  );
};
