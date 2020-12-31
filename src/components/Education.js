const Education = () => {
  return (
    <div className='container card shadow my-4' id='education'>
      <div className='row row-cols-1'>
        <div className='col p-3'>
          <h3 className='text-center'>Education</h3>
          <hr />
          <table className='table table-borderless'>
            <tbody>
              <tr>
                <th colSpan='2'>Bachelor, Computer Engineering</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  Smt. Indira Gandhi College of Engineering, Ghansoli
                  <br />
                  (MumbaiUniversity)
                  <br /> Navi Mumbai, Maharashtra
                </td>
                <td>
                  Graduated, November 2020
                  <br />
                  CGPI 6.74
                  <br />
                  Marks 63.08 %
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan='2'>HSC</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  K M Agrawal Junior College, Kalyan (W) <br />
                  (Maharashtra State Board) <br />
                  Mumbai, Maharashtra
                </td>
                <td>
                  Passed, April 2016
                  <br />
                  Marks 64.62 %
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan='2'>SSC</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  M. K. S English School, Kalyan (W)
                  <br /> (Maharashtra State Board)
                  <br /> Mumbai, Maharashtra
                </td>
                <td>
                  Passed, March 2014 <br />
                  Marks 83.08 %
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;
