import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    enterTask: '',
    activeTagId: tagsList[0].optionId,
    taskList: [],
    activeText: '',
  }

  updateTag = text => {
    const filterTags = tagsList
  }

  submitBtn = event => {
    event.preventDefault()
    const {enterTask, activeTagId} = this.state
    const newTask = {
      id: uuidv4(),
      enterTask,
      activeTagId,
    }
    this.setState(previous => ({
      taskList: [...previous.taskList, newTask],
      enterTask: '',
      activeTagId: tagsList[0].optionId,
    }))
  }

  taskEnter = event => {
    this.setState({enterTask: event.target.value})
  }

  changeOption = event => {
    this.setState({activeTagId: event.target.value})
  }

  render() {
    const {enterTask, activeTagId, taskList} = this.state

    return (
      <div className="main-container">
        <div className="task-container">
          <h1 className="task-heading">Create a task!</h1>
          <form className="form-cont" onSubmit={this.submitBtn}>
            <label className="task-label" htmlFor="task">
              Task
            </label>
            <input
              value={enterTask}
              className="taskEle"
              id="task"
              placeholder="Enter the task here"
              onChange={this.taskEnter}
            />
            <label className="task-label" htmlFor="tags">
              Tags
            </label>
            <select
              id="tags"
              className="tagEle"
              value={activeTagId}
              onChange={this.changeOption}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="addBtn">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tagHeading">Tags</h1>
          <ul className="tag-ul">
            {tagsList.map(each => (
              <TagItem
                tagDetails={each}
                key={each.id}
                updateTag={this.updateTag}
              />
            ))}
          </ul>
          <h1 className="tagHeading">Tasks</h1>
          <ul className="task-ul">
            {taskList.map(each => (
              <TaskItem taskDetails={each} key={each.id} />
            ))}
          </ul>
          {taskList.length === 0 && (
            <p className="no-heading">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
