"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { formatNumberToNDigits } from "utils/helpers";
import PaginationLink from "./PaginationLink";
import PaginationList from "./PaginationList";
import PaginationListItem from "./PaginationListItem";

type Props = {
	disabled?: boolean | undefined;
	page: number;
	totalPages: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	onClick?: (_: number) => void;
} & ComponentPropsWithoutRef<"nav">;

const Pagination = ({
	page: currentPage,
	totalPages,
	hasPreviousPage,
	hasNextPage,
	onClick,
	disabled,
	...rest
}: Props) => {
	// constants
	const gap = 2;
	const start = Math.max(1, currentPage - gap);
	const end = Math.min(currentPage + gap, totalPages);

	// ui
	const renderPagesItems = () => {
		const items = [];

		if (start !== 1)
			items.push(
				<PaginationListItem key="first">
					<PaginationLink
						as="button"
						type="button"
						className="h-100 icon-link icon-link-hover icon-link-hover-reversed"
						onClick={() => onClick?.(1)}
						title="Page 1">
						...
					</PaginationLink>
				</PaginationListItem>
			);

		for (let i = start; i <= end; i++) {
			items.push(
				<PaginationListItem
					className={classNames({ active: i === currentPage })}
					aria-current={i === currentPage ? "page" : undefined}
					key={i}>
					{i === currentPage ? (
						<PaginationLink as="span">
							{formatNumberToNDigits(i)}
							<span className="visually-hidden">(current)</span>
						</PaginationLink>
					) : (
						<PaginationLink
							as="button"
							type="button"
							className="h-100 icon-link icon-link-hover icon-link-hover-reversed"
							onClick={() => onClick?.(i)}
							title={`Page ${formatNumberToNDigits(i)}`}>
							{formatNumberToNDigits(i)}
						</PaginationLink>
					)}
				</PaginationListItem>
			);

			if (i === currentPage + gap && i < totalPages) {
				items.push(
					<PaginationListItem key="last">
						<PaginationLink
							as="button"
							type="button"
							className="h-100 icon-link icon-link-hover icon-link-hover-reversed"
							onClick={() => onClick?.(totalPages)}
							title={`Page ${totalPages}`}>
							...
						</PaginationLink>
					</PaginationListItem>
				);
			}
		}

		return items;
	};

	return (
		<nav aria-label="Pagination" {...rest}>
			{
				<PaginationList>
					<PaginationListItem disabled={!hasPreviousPage || disabled}>
						<PaginationLink
							as="button"
							type="button"
							className="h-100 icon-link icon-link-hover icon-link-hover-reversed"
							title="Previous"
							onClick={() => onClick?.(currentPage - 1)}
							disabled={!hasPreviousPage || disabled}
							tabIndex={!hasPreviousPage || disabled ? -1 : 0}
							aria-disabled={!hasPreviousPage || disabled}>
							<svg className="bi w-16px h-16px" width="22" height="22">
								<use href="#icon-chevron-left" />
							</svg>
							<strong className="d-none d-md-inline-block">Prev page</strong>
						</PaginationLink>
					</PaginationListItem>
					{renderPagesItems()}
					<PaginationListItem disabled={!hasNextPage || disabled}>
						<PaginationLink
							as="button"
							type="button"
							className="h-100 icon-link icon-link-hover"
							title="Next"
							onClick={() => onClick?.(currentPage + 1)}
							disabled={!hasNextPage || disabled}
							tabIndex={!hasNextPage || disabled ? -1 : 0}
							aria-disabled={!hasNextPage || disabled}>
							<strong className="d-none d-md-inline-block">Next page</strong>
							<svg className="bi w-16px h-16px" width="22" height="22">
								<use href="#icon-chevron-right" />
							</svg>
						</PaginationLink>
					</PaginationListItem>
				</PaginationList>
			}
		</nav>
	);
};

export default Pagination;
