import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinkComponent = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <div className={{ color: "icon" && match ? "#fefefe" : "#fefefe" }}></div>
      <Link style={{ color: match ? "#fefefe" : "none" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLinkComponent;
