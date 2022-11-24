import * as React from 'react';


const Services = () => { 

return ( 

<section id="services"> 

<div className="container my-5 py-5"> 

<div className="row mb-5"> 

<div className="col-12"> 

<h1 className="fw-bold text-center">Services</h1> 

<hr /> 

</div> 

</div>


<div className="row"> 

<div className="col-lg-4"> 

<div className="card mb-5 mx-auto mb-5" style={{ width: '18rem' }}> 

<img 

src="https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/03/Web-Developer-Bootcamp-San-Francisco.jpeg" 

className="card-img-top w-100 img-fluid" 

alt="..." 

style={{ height: '150px' }} 

/> 

<div className="card-body text-center p-5"> 

<h3>Frontend Development</h3> 

<p className="card-text"> 

Some quick example text to build on the card title and make up 

the bulk of the card's content. 

</p> 

</div> 

</div> 

</div>


<div className="col-lg-4"> 

<div className="card mb-5 mx-auto mb-5" style={{ width: '18rem' }}> 

<img 

src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/07/front-end-developer.jpg" 

className="card-img-top w-100 img-fluid" 

alt="..." 

style={{ height: '150px' }} 

/> 

<div className="card-body text-center p-5"> 

<h3>backend Development</h3> 

<p className="card-text"> 

Some quick example text to build on the card title and make up 

the bulk of the card's content. 

</p> 

</div> 

</div> 

</div>


<div className="col-lg-4"> 

<div className="card mb-5 mx-auto mb-5" style={{ width: '18rem' }}> 

<img 

src="https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg" 

className="card-img-top w-100 img-fluid" 

alt="..." 

style={{ height: '150px' }} 

/> 

<div className="card-body text-center p-5"> 

<h3>Data Base Management</h3> 

<p className="card-text"> 

Some quick example text to build on the card title and make up 

the bulk of the card's content. 

</p> 

</div> 

</div> 

</div> 

</div> 

</div> 

</section> 

); 

};


export default Services;
