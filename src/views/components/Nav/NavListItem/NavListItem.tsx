"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"li">;

const NavListItem = ({ children, className = "", role = "menuitem", ...props }: Props) => (
	<li className={classNames("nav-item", className)} role={role} {...props}>
		{children}
	</li>
);

export default NavListItem;
