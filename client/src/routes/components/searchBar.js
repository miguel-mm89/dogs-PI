import {  getByName } from "../../redux/actions"
import {useDispatch} from 'react-redux'
import {  useState } from "react"




const SearchBar = () =>{
    const initialValues = {
        dog: ''
    }
    const dispatch = useDispatch()
    
    const [search, setSearch] = useState(initialValues);
    const handlechange = (e) => {
        setSearch({[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getByName(search.dog))
        setSearch(initialValues)
    }


    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type='text' value={search.dog} name='dog' onChange={(e)=> handlechange(e)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar