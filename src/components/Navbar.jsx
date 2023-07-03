const Navbar = ()=>{ 
    const styles ={display: 'none', opacity: '1'}

    return(

        <nav className="navbar navbar-default navbar-sticky bootsnav">

			<div className="container">      
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i className="fa fa-bars"></i>
					</button>
					<a className="navbar-brand" href="index.html"><img src="img/logo.png" className="logo" alt=""/></a>
				</div>

				<div className="collapse navbar-collapse" id="navbar-menu">
					<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li><a href="index.html">Home</a></li> 
							<li><a href="login.html">Login</a></li>
							<li><a href="companies.html">Companies</a></li> 
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Browse</a>
								<ul className="dropdown-menu animated fadeOutUp" style={styles}>
									<li className="active"><a href="browse-job.html">Browse Jobs</a></li>
									<li><a href="company-detail.html">Job Detail</a></li>
									<li><a href="resume.html">Resume Detail</a></li>
								</ul>
							</li>
						</ul>
				</div>
			</div>   
		</nav>

    )

}
export default Navbar