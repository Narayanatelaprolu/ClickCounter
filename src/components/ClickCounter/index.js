// Write your code here
import {component} from 'react'
import './index.css'

class clickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onclick={this.increaseCount} className="btn">
          click Me!
        </button>
      </div>
    )
  }
}

export default clickCounter