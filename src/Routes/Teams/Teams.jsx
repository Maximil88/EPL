import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TeamCard from '../../components/TeamCard/TeamCard';
import { fetchTeams } from '../../Redux/Actions/action';
import './Style.css';



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
    <div className='background'>
    <form  onSubmit={handleSubmit}>
      <div className='search'>
        <label htmlFor="year">Search by Season</label>
        <input id="year" onChange={handleChange} type="text" />
        <button type="submit" >Submit</button>
      </div>
  
      
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

