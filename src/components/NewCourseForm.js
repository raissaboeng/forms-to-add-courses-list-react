import React, { Component } from 'react';

class NewCourseForm extends Component {
    static defaultProps = {
        categories: [],
        onSubmit: () => {}
    }
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            image: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                image: ''
            })
        }

    }

    handleChange(event){
        const { target } = event,
            { name, value } = target;
        this.setState({
            [name]:value
        })
    }


    render(){
        const {props, state} = this;
        return(
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input name="name" value={state.name} onChange={this.handleChange} />
                </label>

                <label>
                    <span>Imagem:</span>
                    <input name="image" value={state.image} onChange={this.handleChange}/>
                </label>

                <label>
                    <span>Categoria:</span>
                    <select name="category" value={state.category} onChange={this.handleChange}>
                        <option value=''>Selecionar</option>
                        {
                           props.categories.map(category => (
                               <option value={category.name}>{category.name}</option>
                           )) 
                        }
                    </select>
                </label>

                <button type="submit"> Criar Curso </button>

            </form>
        )
    }
}

export default NewCourseForm;