import React, {Component} from "react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialiState = {
      task: "",
      note: "",
    }

    this.state = this.initialiState
  }


  handleChange = event => {
    const {name, value} = event.target

    this.setState ({
      [name]: value,
    })
  }

  render() {
    const {task, note} = this.state

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
        name="note"
        value={note}
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
