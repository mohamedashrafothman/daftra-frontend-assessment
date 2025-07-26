"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode } from "react";

type Props = { children?: ReactNode | undefined };

const Nuqs = ({ children }: Props) => <NuqsAdapter>{children}</NuqsAdapter>;

export default Nuqs;
