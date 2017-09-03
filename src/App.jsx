import React, { Component }  from 'react';
import InstructorItem from './InstructorItem.jsx';

export default class App extends Component {
  render(){
    let instList = this.props.instructors.map(function(instructor){
      return (<InstructorItem key={instructor.id}
                      name={instructor.name}
                      avatar={instructor.avatar}
                      hobby={instructor.hobby} />
              )
    });
    {/*
      return (
      <Parent>
        <p>p is a child</p>
      </Parent>
    );
    
      */
    }
    return (
      <div>
        <h1>instructor</h1>
        <ul>
          {instList}
        </ul>
      </div>
    );
  }
}


App.defaultProps = {
  instructors: [
    {
      id: 0,
      name: "Tim",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/tim.jpg",  
      hobby: "sailing"
    },
    {
      id: 1,
      name: "Matt",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/matt.jpg",
      hobby: "math"
    },
    {
      id: 2,
      name: "Elie",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/elie.jpg",
      hobby: "violin"
    },
    {
      id: 3,
      name: "Whiskey",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg",
      hobby: "napping"
    }
  ]
};
