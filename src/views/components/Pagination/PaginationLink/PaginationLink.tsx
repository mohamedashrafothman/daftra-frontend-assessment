"use client";

import classNames from "classnames";
import { ComponentPropsWithRef, ElementType, forwardRef, Ref } from "react";
import NextLink, { type NextLinkProps } from "views/components/NextLink";

type NavLinkProps = { as?: ElementType | undefined } & (
	| (ComponentPropsWithRef<"a"> & NextLinkProps)
	| ComponentPropsWithRef<"button">
	| ComponentPropsWithRef<"span">
);

const PaginationLink = (
	{ as, className = "", children, ...rest }: NavLinkProps,
	ref?: Ref<HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement> | undefined
) => {
	const Component = as || NextLink;

	return (
		<Component className={classNames("page-link rounded", className)} ref={ref} {...rest}>
			{children}
		</Component>
	);
};

export default forwardRef(PaginationLink);
