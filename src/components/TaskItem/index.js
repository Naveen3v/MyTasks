import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {enterTask, activeTagId} = taskDetails
  return (
    <li className="task-list-item">
      <p className="task-li-para">{enterTask}</p>
      <button type="button" className="task-li-btn">
        {activeTagId}
      </button>
    </li>
  )
}
export default TaskItem
