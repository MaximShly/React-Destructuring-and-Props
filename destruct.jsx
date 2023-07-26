"use strict";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: {
      name: "Maradona",
      residence: {
        city: "Tigre",
        country: "Argentina",
      },
      profession: "soccer",
    },
  };

  render() {
    return <Details person={this.state.details} />;
  }
}

const Details = ({ person }) => {
  // destructure props
  const { name, residence, profession } = person;
  const { city, country } = residence;

  return (
    <div style={{ margin: "1em" }}>
      <div id="name">Name: {name}</div>
      <div id="city">City: {city}</div>
      <div id="country">Country: {country}</div>
      <div id="profession">Profession: {profession}</div>
    </div>
  );
};

ReactDOM.render(React.createElement(Person), document.getElementById("root"));
