"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = { disabled?: boolean | undefined } & ComponentPropsWithoutRef<"li">;

const PaginationListItem = ({ children, disabled, className = "", ...props }: Props) => (
	<li className={classNames("page-item", className, { disabled: disabled })} {...props}>
		{children}
	</li>
);

export default PaginationListItem;
