import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TeamCard from '../../components/TeamCard/TeamCard';
import { fetchTeams } from '../../Redux/Actions/action';


function Teams ({fetchTeams, data}) {

  const [fieldData, setFieldData] = useState({
    year: null
  })

  const handleChange = e => {
    const data = {};

    const value = e.target.value;
    const type = e.target.id;

    const dataCopy = Object.assign({}, data, {
      ...data,
    });

    if (type === 'year') {
      dataCopy.year = value;
    }
    setFieldData(dataCopy)
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(fieldData.year)
    fetchTeams(fieldData.year)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="year">Search by Season</label>
        <input id="year" onChange={handleChange} type="text" />
      </div>
      {/* <div>
        <label htmlFor="team">Team</label>
        <input id="team" onChange={handleChange} type="text" />
      </div> */}
      <button type="submit" >Submit</button>
    </form>
    <Row>
    {data && (
      data.teams.map((team, i) => {
        return (
          <Col key={i}>
            <TeamCard team={team}/>
          </Col>
        )
      })
    )}
    </Row>
    </div>
  );
}

const mapDispatchToProps = {
  fetchTeams
}

const mapStateToProps = state => ({
  data: state.teams.data
})


export default connect(mapStateToProps, mapDispatchToProps)(Teams);

