import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
const Filter = () => {
  const [englishLevel, setEnglishLevel] = useState([]);

  const onIngredientsChange = (e) => {
    let _ingredients = [...englishLevel];

    if (e.checked)
      _ingredients.push(e.value);
    else
      _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setEnglishLevel(_ingredients);
  }
  return (
    <div className="flex flex-col items-center w-[35%]">
      <Accordion className='w-full' multiple activeIndex={[0]}>
        <AccordionTab header="Location">
          <InputText placeholder='Search locations' />
        </AccordionTab>
        <AccordionTab header="Category">
          <ul className='flex flex-col gap-2'>
            <li className=' cursor-pointer hover:text-[#00a7ac]'>Accounting & Consulting</li>
            <li className=' cursor-pointer hover:text-[#00a7ac]'>Accounting & Consulting</li>
            <li className=' cursor-pointer hover:text-[#00a7ac]'>Accounting & Consulting</li>
            <li className=' cursor-pointer hover:text-[#00a7ac]'>Accounting & Consulting</li>
            <li className=' cursor-pointer hover:text-[#00a7ac]'>Accounting & Consulting</li>

          </ul>
        </AccordionTab>
        <AccordionTab header="English Level">
          <div className="flex align-items-center">
            <Checkbox className='p-checkbox-box' inputId="ingredient1" name="B1" value="B1" onChange={onIngredientsChange} checked={englishLevel.includes('B1')} />
            <label htmlFor="ingredient1" className="ml-2">B1</label>
          </div>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="B2" value="B2" onChange={onIngredientsChange} checked={englishLevel.includes('B2')} />
            <label htmlFor="ingredient1" className="ml-2">B2</label>
          </div>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="C1" value="C1" onChange={onIngredientsChange} checked={englishLevel.includes('C1')} />
            <label htmlFor="ingredient1" className="ml-2">C1</label>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Filter