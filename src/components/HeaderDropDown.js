import React from 'react'
import '../css/style.css'
const HeaderDropDown = () => {

    const [selectedOption, setSelectedOption] = React.useState('Games');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="option1">Games</option>
      <option value="option2">Sports</option>
      <option value="option3">Adventure</option>
    </select>
  )
}

export default HeaderDropDown
