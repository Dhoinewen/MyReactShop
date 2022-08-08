import {gql} from "@apollo/client"


export const GET_ALL_CATEGORIES = gql`
    query GetAllCategories
    {
        categories
        {
            name
        }
    } 
`;


export const GET_ONE_CAT = gql`
    query GetOneCategory($cat: String!)
{
  category(input: {title: $cat}){
  	products{
      name, gallery, id, prices{
        currency{
          label
        }, amount
      }
    }    
  }
}`;


export const GET_ONE_PRODUCT = gql`
    query GetOneProduct($id: String!)
{
  product(id: $id)
  {id, name, inStock, description, brand, gallery}
    } `;


export const GET_ALL_CURRENCIES = gql`
    query GetAllCurrencies{
  currencies
  {
    label, symbol
  }
}`;
