

const ProductItem=({product})=>{
    return(
        <view>
            <image source={{utl:product.image}} style={styles.image}/>
            <text>{product.description}</text>
        </view>
    )
}
export default ProductItem;

const styles=StyleSheet.create( {
    image:{
        width:200,
        height:200,
    }
})