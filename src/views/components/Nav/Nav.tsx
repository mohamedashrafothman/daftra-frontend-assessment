"use client";

import { ComponentPropsWithoutRef } from "react";
import NavLink from "./NavLink";
import NavList from "./NavList";
import NavListItem from "./NavListItem";

type Props = {} & ComponentPropsWithoutRef<"nav">;

const Nav = ({ children, ...rest }: Props) => <nav {...rest}>{children}</nav>;

export default Object.assign(Nav, { List: NavList, ListItem: NavListItem, Link: NavLink });
