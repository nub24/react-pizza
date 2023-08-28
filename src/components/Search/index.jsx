import React, { useCallback, useContext, useRef, useState } from 'react'
import s from './Search.module.scss';
import { SearchContext } from '../../App';
import { debounce } from 'lodash';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = useRef();

  const [value, setValue] = useState('')

  const onClickClear = () => {
    setValue('')
    setSearchValue('')
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500), 
    [],
  )

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  }

  return (
    <div className={s.root}>
      <input
      ref = {inputRef}
      className={s.input}
      placeholder='Search pizzas'
      onChange={onChangeInput}
      value={value || ''}
    />
      
     {value &&
      <svg 
        onClick={onClickClear} 
        className={s.clearIcon} 
        viewBox="0 0 20 19.84">
        <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
      </svg>
     } 
    </div>
    
  )
}

export default Search