const NewsLetter = ()=>{ 

    return(
		<section className="newsletter">
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">
					<h2>Want More Job & Latest Job? </h2>
					<p>Subscribe to our mailing list to receive an update when new Job arrive!</p>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Type Your Email Address..."/>
						<span className="input-group-btn">
							<button type="button" className="btn btn-default">subscribe!</button>
						</span>
					</div>
					</div>
				</div>
			</div>
		</section>

    )

}
export default NewsLetter