import { colors } from "./Styles/colors"

const CategoriesScreen=({handleCategory})=>{
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [categoriesFiltered,setCategoriesFiltered]=useState([])

useEffect (()=>{
        if (input ==="") setCategoriesFiltered(CATEGORIES)
        else {const categoryFiltered=CATEGORIES.filter(category=>category.category.toLowerCase().includes(input.toLowerCase()))
        setCategoriesFiltered(categoryFiltered)}
    }, [input])


const handleSelectedCategory=(category)=>{
    handleCategory(category)
}

const handleErase=()=> {
    setInput("")
}
return (
    <>
    <Header title={category.category}/>
    <View style={styles.container}>
    <Searcher >
    <TextInput
               value= {input}
               keyboardType="default"
               style={style.input}
               placeholder="Search a product"
     />    
     <TouchableOpacity onPress={handleErase}>
     <Entpo name="erase" size={30} color={black}/>
     </TouchableOpacity>
     </Searcher>
     <View style={styles.listContainer}>
         <list data={categoriesFiltered} itemType={"Product"}onPress={()=>{}}/>
         <Button title="Go back" onPress={handleSelectedCategory}/>
      </View>
      </View>

    </>
)}
export default CategoriesScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        flexDirection:'column',

    },
    input:{
        width:'80%',
        padding:10,
        margin:10,
        backgroundColor:colors.blue,
        borderRadius:10,
        color:'white',
        height:50,
    },
    listContainer:{
        flex:1,
    }
})