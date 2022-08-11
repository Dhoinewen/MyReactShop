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
      name, gallery, inStock, id, prices{
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
  {id, attributes{id,name,type, items{displayValue,value,id}} name, inStock, description, brand, gallery, prices{
    currency {
      label, symbol}, amount
  }}
    }`;


export const GET_ALL_CURRENCIES = gql`
    query GetAllCurrencies{
  currencies
  {
    label, symbol
  }
}`;
