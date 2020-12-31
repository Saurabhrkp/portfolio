const Skills = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='skills'></div>
      <div className='container card shadow p-4'>
        <h3 className='text-center'>Skills and Tools</h3>
        <hr />
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='p-2'>
              <h6>Javascript</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-danger progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div className='p-2'>
              <h6>Express.js</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-aqua progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='65'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <div className='p-2'>
              <h6>Node.js</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-info progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='60'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            <div className='p-2'>
              <h6>React.js</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-warning progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='55'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '55%' }}
                ></div>
              </div>
            </div>
            <div className='p-2'>
              <h6>MongoDB</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-success progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='55'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '55%' }}
                ></div>
              </div>
            </div>
            <div className='p-2'>
              <h6>Java</h6>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-dark progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='50'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <h4 className='text-center'>Others</h4>
            <span className='badge badge-light p-3 m-1'>
              <h6>HTML</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>CSS</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>Python</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>MVC</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>GitHub</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>Heroku</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>Mongoose</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>RESTful API</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>SQL</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>NoSQL</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>Visual Studio Code</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>NPM</h6>
            </span>
            <span className='badge badge-light p-3 m-1'>
              <h6>JSON</h6>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
