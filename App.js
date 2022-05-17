export default function App(){

const[categorySelected,setCategorySelected]=useState(null)
const handleCategory=(category)=>{
  
        setCategorySelected(category)
    }


const [loaded]=useFonts({
    OpenSans:require('./assets/Fonts/static/OpenSans')})
    if(!loaded){
        return <ActivityIndicator/>
    }


return (
    <View style={styles.container}>
    {categorySelected ?
    <ProductScreen category={categorySelected}/>
:

 <CategoriesScreen handleCategory={handleCategory}/>}
    </View>
)}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    }
})