import React from 'react';

const Gallery = () => {
  return (
    <div className="container mt-4">
      <h1>Gallery</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img src="https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="School Building" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Classroom" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://plus.unsplash.com/premium_photo-1681494382914-a0f75d8b94be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Science Lab" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://images.unsplash.com/photo-1652620364148-0eabd1080dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Sports Field" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://plus.unsplash.com/premium_photo-1681505626913-6911fb654548?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Annual Day Celebration" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://images.unsplash.com/photo-1680875038464-84554c51a1e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Field Trip" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
