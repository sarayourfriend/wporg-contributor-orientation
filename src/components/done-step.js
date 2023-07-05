/* global WPorgContribBlock */

export default function DoneStep( { headline, value } ) {
	return (
		<>
			<h2 className="wporg-contributor-orientation--title">{ headline }</h2>
			{ value.map( ( slug ) => {
				const team = WPorgContribBlock.teams[ slug ];
				return (
					<div key={ slug } className="wporg-contributor-orientation--team">
						<h3 className="wporg-contributor-orientation--team-name">
							<a href={ team.url } target="_blank" rel="noopener noreferrer">
								<img alt="" src={ `data:image/svg+xml;utf8,${ team.icon }` } />
								{ team.name }
							</a>
						</h3>
						<p className="wporg-contributor-orientation--team-desc">{ team.description }</p>
						<a
							className="wporg-contributor-orientation--team-more"
							href={ team.url }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ team.learnMore }
						</a>
					</div>
				);
			} ) }
		</>
	);
}