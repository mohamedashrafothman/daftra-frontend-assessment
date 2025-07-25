"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"ul">;

const NavList = ({ children, className = "", role = "menubar", ...props }: Props) => (
	<ul className={classNames("nav mb-0", className)} role={role} {...props}>
		{children}
	</ul>
);

export default NavList;
