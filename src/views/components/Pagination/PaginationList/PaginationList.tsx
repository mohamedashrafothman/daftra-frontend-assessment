"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"ul">;

const PaginationList = ({ children, className = "", ...props }: Props) => (
	<ul
		className={classNames(
			"pagination pagination-sm m-0 gap-1 gap-lg-2 flex-nowrap align-items-stretch",
			className
		)}
		{...props}>
		{children}
	</ul>
);

export default PaginationList;
