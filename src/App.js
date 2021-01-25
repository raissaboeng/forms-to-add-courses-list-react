import React, {Component} from 'react';
import './App.css';
import Course from './components/course';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: [
        {
          id: '1',
          name: 'React',
          category: 'Javascript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        },
        {
          id: '2',
          name: 'React',
          category: 'Javascript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        }
      ]
    }
    this.remove = this.remove.bind(this);
  }

  remove(courseId){
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id = courseId);

      courses.splice(courseIndex, 1);
      this.setState({courses});


  }

  render(){
    const {state} = this;
     return (
      <div className="App">
        <ul className="courses-list">
         {
           state.courses.map(course => <Course course={course} onRemove={this.remove}/>)
         }
        </ul>
      </div>
    );
  }
 
}

export default App;
