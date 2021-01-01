const Achievements = () => {
  return (
    <>
      <div style={{ height: '65px' }} id='achievements'></div>
      <div className='container card shadow p-4'>
        <div className='row'>
          <div className='col px-4'>
            <h3 className='text-center'>Achievements</h3>
            <hr />
            <h4>Certification</h4>
            <h6>MongoDB Essentials - Understand the Basics of MongoDB</h6>
            <p>
              Certified By: Udemy <br />
              Year of Completion: 2019
            </p>
            <h6>Workshop on Machine Learning</h6>
            <p>
              Certified By: College Campus <br />
              Year of Completion: 2020
            </p>
            <h6>Hadoop Basic Course for Beginners to Professionals</h6>
            <p>
              Certified By: Edulearners Technologies and Udemy <br />
              Year of Completion: 2019
            </p>
            <h6>Web Design with WordPress: Everything from Beginning to End</h6>
            <p>
              Certified By: Udemy <br />
              Year of Completion: 2019
            </p>
            <h4>Event</h4>
            <h6>Workshop on Basic JavaScript, Node.js and Express.js</h6>
            <p>Got good feedbacks from participants.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;