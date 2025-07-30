export default function Books({book}){
    const {name, price} = book;
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}