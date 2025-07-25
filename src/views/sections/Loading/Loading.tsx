const Loading = () => (
	<section className="loading vh-100">
		<div className="container h-100">
			<div className="row justify-content-center align-items-center h-100">
				<div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
					<div className="card text-center">
						<div className="card-body border-0 p-5">
							<div
								className="spinner-border text-primary w-60px h-60px"
								role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
							<p className="mb-0 mt-3">
								<small>Loading...</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Loading;
