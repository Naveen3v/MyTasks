import './index.css'

const TagItem = props => {
  const {tagDetails, updateTag} = props
  const {optionId, displayText} = tagDetails

  const tagUpdate = () => {
    updateTag(displayText)
  }

  return (
    <li className="tag-list">
      <button type="button" className="tag-btn" onClick={tagUpdate}>
        {displayText}
      </button>
    </li>
  )
}
export default TagItem
