import s from './Buttons.module.css'



function Buttons({ options, onLeaveFeedback }) {
  return (
    options.map(item => 
      <li className={s.buttonsListItem} key={item}>
        <button
          type="button"
          className={s.button}
          name={item}
          onClick={onLeaveFeedback}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      </li>
    )
  );
};


export default Buttons