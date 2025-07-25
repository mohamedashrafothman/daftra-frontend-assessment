"use client";

import IPokemon from "interfaces/Pokemon.interface";
import PokemonSingleCardAbilityListItem from "./PokemonSingleCardAbilityListItem";
import PokemonSingleCardBody from "./PokemonSingleCardBody";
import PokemonSingleCardDimension, { ICONS } from "./PokemonSingleCardDimension";
import PokemonSingleCardBaseExperience from "./PokemonSingleCardExperienceNumber";
import PokemonSingleCardHeader from "./PokemonSingleCardHeader";
import PokemonSingleCardImage from "./PokemonSingleCardImage";
import PokemonSingleCardNumber from "./PokemonSingleCardNumber";
import PokemonSingleCardSectionTitle from "./PokemonSingleCardSectionTitle";
import PokemonSingleCardStats from "./PokemonSingleCardStats";
import PokemonSingleCardTitle from "./PokemonSingleCardTitle";
import PokemonSingleCardTypesList from "./PokemonSingleCardTypesList";
import PokemonSingleCardTypesListItem from "./PokemonSingleCardTypesListItem";
import PokemonSingleCardWrapper from "./PokemonSingleCardWrapper";

type Props = { isLoading?: boolean | undefined; pokemon?: IPokemon | undefined };

const PokemonSingleCard = (props: Props) => {
	// constants
	const loading = props.isLoading;
	const imageUrl = props.pokemon?.sprites.other["official-artwork"].front_default || "";
	const dimensions = [
		{ type: "height", unit: "m", icon: ICONS.HEIGHT, value: props.pokemon?.height || 0 },
		{ type: "weight", unit: "kg", icon: ICONS.WEIGHT, value: props.pokemon?.weight || 0 },
	];
	const stats = [...(props.pokemon?.stats || [])].map((state) => ({
		title: state.stat.name,
		value: state.base_stat,
	}));
	const abilities = [...(props.pokemon?.abilities || [])].map(({ ability, is_hidden }) => ({
		ability: ability.name,
		isHidden: is_hidden,
	}));

	return (
		<PokemonSingleCardWrapper isLoading={loading}>
			<PokemonSingleCardHeader>
				<PokemonSingleCardTitle isLoading={loading} name={props.pokemon?.name || ""} />
				<PokemonSingleCardNumber isLoading={loading} id={props.pokemon?.id || 1} />
			</PokemonSingleCardHeader>
			<PokemonSingleCardBody>
				<div className="row gy-4 gy-xl-0">
					<div className="col-12 col-xl-6">
						<div className="row gy-3 justify-content-center">
							<div className="col-12">
								<PokemonSingleCardImage isLoading={loading} imageUrl={imageUrl} />
							</div>
							{(loading ||
								(props.pokemon?.types && props.pokemon?.types?.length > 0)) && (
								<>
									<div className="col-auto">
										<PokemonSingleCardTypesList>
											{loading
												? Array.from({ length: 2 }, (_, i) => i).map(
														(_, index) => (
															<PokemonSingleCardTypesListItem
																key={index}
																isLoading
															/>
														)
													)
												: props.pokemon?.types.map(({ type }) => (
														<PokemonSingleCardTypesListItem
															key={type.name}
															name={type.name}
														/>
													))}
										</PokemonSingleCardTypesList>
									</div>
									<div className="col-12 m-0"></div>
								</>
							)}
							{dimensions.map((dimension) => (
								<div className="col" key={dimension.type}>
									<PokemonSingleCardDimension
										isLoading={loading}
										{...dimension}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="col-12 col-xl-6">
						<div className="row gy-4 text-start">
							{(loading || stats.length > 0) && (
								<div className="col-12">
									<PokemonSingleCardSectionTitle title="base stats" />
									<div className="vstack gap-3">
										{loading
											? Array.from({ length: 6 }, (_, i) => i).map(
													(_, index) => (
														<PokemonSingleCardStats
															key={index}
															isLoading
														/>
													)
												)
											: stats.map((stat) => (
													<PokemonSingleCardStats
														key={stat.title}
														{...stat}
													/>
												))}
									</div>
								</div>
							)}
							<div className="col-12">
								<PokemonSingleCardSectionTitle title="abilities" />
								<div className="vstack gap-2">
									{loading
										? Array.from({ length: 2 }, (_, i) => i).map((_, index) => (
												<PokemonSingleCardAbilityListItem
													key={index}
													isLoading
												/>
											))
										: abilities.map((ability) => (
												<PokemonSingleCardAbilityListItem
													key={ability.ability}
													{...ability}
												/>
											))}
								</div>
							</div>
							<div className="col-12">
								<PokemonSingleCardSectionTitle title="Base Experience" />
								<PokemonSingleCardBaseExperience
									isLoading={loading}
									value={props.pokemon?.base_experience || 0}
								/>
							</div>
						</div>
					</div>
				</div>
			</PokemonSingleCardBody>
		</PokemonSingleCardWrapper>
	);
};

export default PokemonSingleCard;
