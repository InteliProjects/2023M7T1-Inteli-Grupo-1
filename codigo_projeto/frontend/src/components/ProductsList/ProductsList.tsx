import Product, { IProduct } from "./Product/Product";
import { Container } from "./Styles";

// definindo o Products List como uma lista
interface IProductsList {
    data: IProduct[]
}


// exportando Products List implementando IProductsList
export default function ProductsList(props: IProductsList) {

    return (
        <>
        {/* criando containers com base na data recebida */}
            <Container>
                {
                    props.data?.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                unit_price={item.unit_price}
                                image_url={item.image_url}
                                description={item.description}
                            />
                        )
                    })
                
                    || <>
                        asd
                    </>
                } 
            </Container>
        </>
    )

}