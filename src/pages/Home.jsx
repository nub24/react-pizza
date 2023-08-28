import React, { useState, useEffect, useContext } from 'react'

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination';
import { SearchContext } from '../App.js'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Home = () => {

  const { categoryId, sort, currentPage } = useSelector(state => state.filter)
  const dispatch= useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [currentPage, setCurrentPage] = useState(1)
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    axios.get(`https://64e1d101ab00373588186e48.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then(res => {
      setPizzas(res.data);
      setIsLoading(false);
    })

    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index}/>)
  const items = pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)

  return (
    <div className='container'>
        <div className="content__top">
            <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            { isLoading ? skeletons : items }
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
}

export default Home