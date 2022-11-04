

const Filter = ({ sort, setSort, order, setOrder }) => {

    const handleChange = (event) => {
        setSort(event.target.value)
    }
    const toggleOrder = (event) => {
        event.preventDefault()
        setOrder(prevOrder => !prevOrder)
    }
    
    return <form className="filter">
        <input type="radio" value='title' name="sort" className="radio-input" id="title" onChange={handleChange}/>
        <label htmlFor="title" className="radio-label">title</label>
        <input type="radio" value='designer' name="sort" className="radio-input" id="designer" onChange={handleChange}/>
        <label htmlFor="designer" className="radio-label">designer</label>
        <input type="radio" value='owner' name="sort" className="radio-input" id="owner" onChange={handleChange}/>
        <label htmlFor="owner" className="radio-label">owner</label>
        <input type="radio" value='category' name="sort" className="radio-input" id="category" onChange={handleChange}/>
        <label htmlFor="category" className="radio-label">category</label>
        <input type="radio" value='created_at' name="sort" className="radio-input" id="created_at" onChange={handleChange}/>
        <label htmlFor="created_at" className="radio-label">created_at</label>
        <input type="radio" value='votes' name="sort" className="radio-input" id="votes" onChange={handleChange}/>
        <label htmlFor="votes" className="radio-label">votes</label>
        <button id="toggle-order" onClick={toggleOrder}>{order? 'ASC': 'DESC'}</button>
        
    </form>
}
export default Filter