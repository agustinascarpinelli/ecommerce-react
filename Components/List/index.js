const List =({itemType="category",data,onPress})=>{
    const fnRender=(item =>{
        return(
            <TouchableOpacity onPress={()=>onPress(item)}>
                {itemType==="category" ?
                <CategoryItem category={item}/>
            :
             <ProductItem product={item}/>}
            </TouchableOpacity>
        )
    })
}