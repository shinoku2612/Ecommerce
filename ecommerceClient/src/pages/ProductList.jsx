import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import { mobile } from '../responsive';
const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
const Main = styled.div`
    flex: 1;
    min-height: 100%;
    margin-top: 60px;
    ${mobile({ marginTop: "10px" })};
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    
    @media only screen and (max-width: 414px) {
        &:first-child {
            margin-right: 5%;
        }
    }
    ${mobile({ margin: "0", display: "flex", flexDirection: "column", flex: 1 })};
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })};
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    ${mobile({ margin: "10px 0" })};
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters(
            e.target.value === "all"
                ? {}
                : {
                    ...filters,
                    [e.target.name]: value
                });
    };
    const handleField = (e) => {
        const field = e.target.value === "Field" ? "" : e.target.value;
        window.location.replace(`/products/${field}`);
    };

    return (
        <Container>
            <Header></Header>
            <Main className="container">
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Books: </FilterText>
                        <Select className={!cat ? "" : "d-none"} name="field"
                            onChange={handleField}
                            defaultValue="Field"
                        >
                            <Option value="Field" disabled>Field</Option>
                            <Option value="frontend">Front-end</Option>
                            <Option value="backend">Back-end</Option>
                            <Option value="fullstack">Fullstack</Option>
                        </Select>
                        {/* Front-end book */}
                        <Select className={cat === "frontend" ? "" : "d-none"} name="language"
                            onChange={handleFilters}
                            defaultValue="Language"
                        >
                            <Option value="Language" disabled>Languge</Option>
                            <Option value="all">All</Option>
                            <Option value="html-css">HTML-CSS</Option>
                            <Option value="jquery">jQuery</Option>
                            <Option value="js">JavaScript</Option>
                            <Option value="reactjs">ReactJS</Option>
                            <Option value="vuejs">VueJS</Option>
                        </Select>
                        {/* Back-end book */}
                        <Select className={cat === "backend" ? "" : "d-none"} name="language"
                            onChange={handleFilters}
                            defaultValue="Language"
                        >
                            <Option value="Language" disabled>Languge</Option>
                            <Option value="all">All</Option>
                            <Option value="java">Java Servlet</Option>
                            <Option value="asp">ASP .NET</Option>
                            <Option value="nodejs">NodeJS</Option>
                            <Option value="php">PHP</Option>
                            <Option value="python">Python</Option>
                        </Select>
                        {/*Fullstack book */}
                        <Select className={cat === "fullstack" ? "" : "d-none"} name="language"
                            onChange={handleFilters}
                            defaultValue="Language"
                        >
                            <Option value="Language" disabled>Language</Option>
                            <Option value="all">All</Option>
                            <Option value="reactnative">React Native</Option>
                            <Option value="nodejs">NodeJS</Option>
                            <Option value="python">Python</Option>
                            <Option value="php">PHP</Option>
                            <Option value="mern">MERN</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Books: </FilterText>
                        <Select onChange={(e) => setSort(e.target.value)} defaultValue="Sort">
                            <Option value="Sort" disabled>Sort</Option>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products cat={cat} filters={filters} sort={sort} ></Products>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default ProductList
