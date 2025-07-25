"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"main">;

const Main = ({ children, ...rest }: Props) => <main {...rest}>{children}</main>;

export default Main;
