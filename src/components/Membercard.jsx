const Membercard = ()=>{
    const styles = {backgroundImage: "url(img/bg-1.jpg)", backgroundSize:"cover"}
    const styles1 = {backgroundImage: "url(img/bg-2.jpg)",backgroundSize:"cover"}
    const styles2 = {backgroundImage: "url(img/bg-3.jpg)",backgroundSize:"cover"}
    return(
        <section className="membercard dark">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4">
						<div className="left-widget-sidebar">
							<div className="card-widget bg-white user-card">
								<div className="u-img img-cover" style={styles}></div>
								<div className="u-content">
									<div className="avatar box-80">
										<img className="img-responsive img-circle img-70 shadow-white" src="img/avatar3.jpg" alt=""/>
										<i className="fa fa-circle-o fa-green"></i>
									</div>
									<h5>Sazzel Shi</h5>
									<p className="text-muted">UX/ Designer</p>
								</div>
								<div className="user-social-profile">
									<ul>
										<li><a href=""><i className="fa fa-facebook"></i></a></li>
										<li><a href=""><i className="fa fa-google-plus"></i></a></li>
										<li><a href=""><i className="fa fa-twitter"></i></a></li>
										<li><a href=""><i className="fa fa-instagram"></i></a></li>
										<li><a href=""><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div className="left-widget-sidebar">
							<div className="card-widget bg-white user-card">
								<div className="u-img img-cover" style={styles1}></div>
								<div className="u-content">
									<div className="avatar box-80">
										<img className="img-responsive img-circle img-70 shadow-white" src="img/avatar2.jpg" alt=""/>
										<i className="fa fa-circle-o fa-green"></i>
									</div>
									<h5>Daniel Dezox</h5>
									<p className="text-muted">CEO Founder</p>
								</div>
								<div className="user-social-profile">
									<ul>
										<li><a href=""><i className="fa fa-facebook"></i></a></li>
										<li><a href=""><i className="fa fa-google-plus"></i></a></li>
										<li><a href=""><i className="fa fa-twitter"></i></a></li>
										<li><a href=""><i className="fa fa-instagram"></i></a></li>
										<li><a href=""><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div className="left-widget-sidebar">
							<div className="card-widget bg-white user-card">
								<div className="u-img img-cover" style={styles2}></div>
								<div className="u-content">
									<div className="avatar box-80">
										<img className="img-responsive img-circle img-70 shadow-white" src="img/avatar1.jpg" alt=""/>
										<i className="fa fa-circle-o fa-green"></i>
									</div>
									<h5>Silp Sizzer</h5>
									<p className="text-muted">Human Resource</p>
								</div>
								<div className="user-social-profile">
									<ul>
										<li><a href=""><i className="fa fa-facebook"></i></a></li>
										<li><a href=""><i className="fa fa-google-plus"></i></a></li>
										<li><a href=""><i className="fa fa-twitter"></i></a></li>
										<li><a href=""><i className="fa fa-instagram"></i></a></li>
										<li><a href=""><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )

}
export default Membercard