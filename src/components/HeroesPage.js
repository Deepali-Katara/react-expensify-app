import React from "react";
import { connect } from "react-redux";
import myHeroes from "../store/defaultValues";
import HeroList from "../components/HeroList";

const hello = () => {
  console.log("hello");
};
export const Heroes = (props) => (
  <div>
    <h1>my Heroes</h1>
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {props.heroes.map((hero) => (
          <tr>
            <td>{hero.id}</td>
            <button onClick={hello}>
              <td>{hero.name}</td>
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  console.log("mydata" + state);
  console.log(state[1]);
  return {
    name: "abc",
    heroes: state,
  };
};

const connectedHeroes = connect(mapStateToProps)(Heroes);
export default connectedHeroes;
