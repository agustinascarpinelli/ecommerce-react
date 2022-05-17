const Header=({title='Ecommerce'})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Header;

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.lighterBlue,
        height:80,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{ 
        fontnSize:20,
        fontFamiliy:'OpenSans',
    }
})