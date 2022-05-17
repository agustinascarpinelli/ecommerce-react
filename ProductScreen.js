const ProductScreen=({category, handleCategory})
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [productsFiltered,setProductsFiltered]=useState([])
const [initialProducts, setInitialProducts]=useState([])
useEffect (()=>{
    if (initialProducts.length!==0){
        if (input ==="") setProductsFiltered(initialProducts)
        else {const productfiltered=initialProducts.filter(product=>product.description.toLowerCase().includes(input.toLowerCase()))
        setProductsFiltered(productfiltered)}
    }}, [input,initialProducts])

useEffect (()=>{
    const initialProduct=PRODUCTS.filter(product=>product.category===category.id)
    setInitialProducts(initialProduct)
})  

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
         <list data={productsFiltered} itemType={"Product"}onPress={()=>{}}/>
         <Button title="Go back" onPress={()=>handleCategory(null)}/>
      </View>
      </View>

    </>
)

export default ProductScreen;

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
        backgroundColor:'black',
        borderRadius:10,
        color:'white',
        height:50,
    },
    listContainer:{
        flex:1,
    }
})