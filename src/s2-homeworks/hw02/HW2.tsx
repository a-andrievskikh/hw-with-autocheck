import React, { useState } from 'react'
import { Affairs } from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
  _id: number
  title: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  {_id: 1, title: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  {_id: 2, title: 'anime', priority: 'low'},
  {_id: 3, title: 'games', priority: 'low'},
  {_id: 4, title: 'work', priority: 'high'},
  {_id: 5, title: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  return filter === 'low' ? affairs.filter((item: AffairType) => item.priority === 'low')
    : filter === 'middle' ? affairs.filter((item: AffairType) => item.priority === 'middle')
      : filter === 'high' ? affairs.filter((item: AffairType) => item.priority === 'high')
        : affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
  return affairs.filter((item: AffairType) => item._id !== _id)
}

export const HW2 = () => {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}
