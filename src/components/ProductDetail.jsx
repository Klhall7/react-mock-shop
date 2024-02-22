/* eslint-disable react/prop-types */
import styles from './productDetail.module.css'

const ProductDetail = ({product}) => {
    return (
        <div className ={styles.root}>
        <h2>{product.node.title}</h2>
        <p>I AM PRODUCT DETAIL COMPONENT</p>
        <figure style= {{maxWidth: '200px'}}>
        <img 
        src={product.node.featuredImage.url} 
        alt={product.node.title}
        style= {{width: '100%', maxWidth: '100%', height: 'auto'}}/>
        </figure>
        </div>
    )
}

export default ProductDetail;