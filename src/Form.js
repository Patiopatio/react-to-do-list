import React, {Component} from "react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialiState = {
      task: "",
      description: "",
    }

    this.state = this.initialiState
  }


  handleChange = event => {
    const {task, value} = event.target

    this.setState ({
      [task]: value,
    })
  }

  render() {
    const {task, description} = this.state

    return (
      <form>
        <label>Task</label>
        <input
        type="text"
        name="task"
        value={task}
        onChange={this.handleChange} />
        <label>Further Notes</label>
        <input
        type="text"
        name="description"
        value={description}
        onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

}

export default Form
