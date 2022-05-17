const CategoryItem=({categoryItem})=>{

    return(
        <View style={styles.container}>
            <Text styles={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategoryItem;
const styles=StyleSheet.create({
    container:{
        width:150,
        height:150,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        backgroundColor:colors.blue,
        margin:15,
        borderRadius:10,
    },
    text:{
        fontSize:18,
        fontFamily:'OpenSans',
    }
})