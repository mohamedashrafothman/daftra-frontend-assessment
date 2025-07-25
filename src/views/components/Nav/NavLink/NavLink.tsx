"use client";

import classNames from "classnames";
import NextLink, { type NextLinkProps } from "views/components/NextLink";

type NavLinkProps = {} & NextLinkProps;

const NavLink = ({ className = "", children, ...rest }: NavLinkProps) => (
	<NextLink className={classNames("nav-link", className)} {...rest}>
		{children}
	</NextLink>
);

export default NavLink;
