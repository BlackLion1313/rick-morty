import React from 'react';
import styles from './Search.module.scss';


const Search = ({ setSearch }) => {
  return (

    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input
        onChange={(e) => {
          setSearch(e.target.value); //отследить что в инпуте
        }}
        placeholder='Searching'
        type='text'
        className={`${styles.input} `} />
  
    </form>
    
  )
}

export default Search;