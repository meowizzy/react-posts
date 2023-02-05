import React from 'react'
import Select from "../UI/select/Select";
import Input from "../UI/input/Input";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className="posts-sorting">
        <Input
            placeholder="Поиск"
            value={filter.query}
            onChange={event => setFilter({...filter, query: event.target.value})}
        />
        <Select
            defaultValue="Не сортировать"
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
                {value: "title", name: "По названию"},
                {value: "body", name: "По описанию"}
            ]}
        />
    </div>
  )
}
