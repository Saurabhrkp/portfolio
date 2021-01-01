const Footer = () => {
  return (
    <>
      <div style={{ height: '65px' }}></div>
      <footer className='page-footer font-small shadow m-0 py-3'>
        <div className='footer-copyright text-center py-3'>
          <span>© 2020 Copyright: Saurabh Patel</span>
          <br />
          <span> Designed By </span>
          <a
            href='https://github.com/Saurabhrkp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-info'>Saurabhrkp</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
