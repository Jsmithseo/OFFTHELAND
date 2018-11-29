import React from 'react';

class Threeup extends React.Component {
  render() {
    return (
      <div className="threeup-section">
        <div className="container">
          <div className="col-12 text-center header">
            <h1>The OFF THE LAND Playbook</h1>{' '}
          </div>
          <div className="col-12 text-center sub-header">
            <h4>Expose, Empower, and Transform</h4>{' '}
          </div>
          <div className="threeup-image-container">
          <div className="row">
            <div className="col-sm">
              <img
                class="img-fluid img-responsive rounded"
                src="http://placehold.it/200x200"
                alt=""
              />
            </div>

            <div className="col-sm">
              <img
                class="img-fluid img-responsive rounded"
                src="http://placehold.it/200x200"
                alt=""
              />
            </div>

            <div className="col-sm">
              <img
                class="img-fluid img-responsive rounded"
                src="http://placehold.it/200x200"
                alt=""
              />
            </div>

            <div className="col-sm">
              <img
                class="img-fluid img-responsive rounded"
                src="http://placehold.it/200x200"
                alt=""
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Threeup;
