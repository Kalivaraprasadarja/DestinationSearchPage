// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
