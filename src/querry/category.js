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
      name, gallery, id
    }  
  }
}`;