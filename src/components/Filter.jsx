

const Filter = ({ sort, setSort }) => {

    const handleChange = (event) => {
        
        setSort(event.target.value)
        console.log(sort)
        event.preventDefault()
    }
    
    return <form className="filter">
            <button name='sort' type="radio" onClick={handleChange} value='title' className="filter-radio">title</button>
            <button name='sort' type="radio" onClick={handleChange} value='designer' className="filter-radio">designer</button>
            <button name='sort' type="radio" onClick={handleChange} value='owner' className="filter-radio">owner</button>
            <button name='sort' type="radio" onClick={handleChange} value='category' className="filter-radio">category</button>
            <button name='sort' type="radio" onClick={handleChange} value='created_at' checked className="filter-radio">date</button>
            <button name='sort' type="radio" onClick={handleChange} value='votes' className="filter-radio">votes</button>
    </form>
}
export default Filter