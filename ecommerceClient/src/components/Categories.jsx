import styled from 'styled-components'
import { categories } from '../book';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';
import '../assets/custom.css';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Categories
