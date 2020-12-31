import Photo from '../img/profilePhoto.jpg';

const Header = () => {
  return (
    <div className='container card bg-light shadow my-4'>
      <div className='row justify-content-center'>
        <div className='col-sm-5 col-md-4 col-lg-3 text-center'>
          <img src={Photo} alt='Me' className='card-body img-fluid col' />
        </div>
        <div className='col-sm-10 col-md-8 col-lg-9'>
          <h4 className='card-title pt-4'>Saurabh Rajesh Patel</h4>
          <div>
            <p className='card-title '>
              <a href='mailto:sauarbhpatel230@gmail.com'>
                sauarbhpatel230@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
