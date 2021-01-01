import Photo from '../img/profilePhoto.jpg';

const Header = () => {
  return (
    <>
      <div id='home' style={{ height: '70px' }}></div>
      <div className='container card shadow mt-5'>
        <div className='row justify-content-center p-4'>
          <div className='col-sm-10 col-md-5 col-lg-4 text-center'>
            <img src={Photo} alt='Me' className='card-body img-fluid col' />
          </div>
          <div className='col-sm-10 col-md-6 col-lg-8 my-auto text-center'>
            <h4 className='card-title pt-4'>Saurabh Rajeshkumar Patel</h4>
            <div>
              <a href='mailto:sauarbhpatel230@gmail.com'>
                <p className='card-title '>sauarbhpatel230@gmail.com</p>
              </a>
              <a href='tel:+917021373904'>
                <p className='card-title '>+91 7021373904</p>
              </a>
              <a
                href='http://github.com/saurabhrkp'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='card-title'>http://github.com/saurabhrkp</p>
              </a>
            </div>
            <button type='button' className='btn btn-primary rounded-0 m-2'>
              <a
                href='https://github.com/Saurabhrkp/portfolio/raw/master/public/Resume_Sauarbh.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download='Resume_Sauarbh.pdf'
                className='text-decoration-none text-white'
              >
                Download My Resume!
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
