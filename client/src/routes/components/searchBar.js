import {  getByName } from "../../redux/actions"
import {useDispatch} from 'react-redux'
import {  useState } from "react"
import {BsSearch} from 'react-icons/bs' 
import styled from 'styled-components'




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
        e.preventDefault();
        if(search.dog.charAt(0) === ' '|| search.dog.length === 0){
            alert('Please spell a leather')
        } else {
            dispatch(getByName(search.dog))
            setSearch(initialValues)
        }
    }


    return(
        <SearchContainer>
            <Form className="form" onSubmit={handleSubmit}>
                <Div>
                <Input type='text' placeholder="Search..." value={search.dog} name='dog' onChange={(e)=> handlechange(e)}/>
                <Button type='submit'><BsSearch/></Button>
                </Div>
            </Form>
        </SearchContainer>
    )
}

const Input = styled.input`
padding: 3px 7px;
border: none;
position: relative;
background: none;
`

const Button = styled.button`
align-content: center;
border-radius: 3px;
border: none;
padding: 3px 7px;
color: black;
cursor: pointer;
background: none;
`

const Form = styled.form`
/* width: 400px; */
display: flex;
flex-direction: row;
label{
    color: darkred;
    font-weight: bold;
    margin-left: 10px;
}
`

const SearchContainer = styled.div`
display: flex;
flex-direction: row;
/* width: 390px; */
margin-left: auto;
margin-right: auto;
`
const Div = styled.div`
border: 1px solid black;
width: 210px;
background-color: whitesmoke;
display: flex;
flex-direction: row;
border-radius: 5px;
height: 28px;
padding: 2px;
`



export default SearchBar