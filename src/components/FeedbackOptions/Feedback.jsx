import s from './Feedback.module.css'
import Button from './Buttons/Buuttons'



function Feedback({ options, onLeaveFeedback }) {
  return  <ul className={s.buttonsList}>
        <Button options={options} onLeaveFeedback={onLeaveFeedback} />
    </ul>
}

export default Feedback