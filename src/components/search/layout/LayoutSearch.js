import React, { useEffect, useState } from 'react';
import { Layout, Space, Menu, Dropdown, Button, Select } from 'antd';
import './LayoutSearch.css';
import ProductList from '../productList/ProductList';
import BestSeller from '../bestSeller/BestSeller';
import { default as HeaderSearch } from '../header/Header'
import "../header/Header.css"
const { Header, Footer, Sider, Content } = Layout;

const array = ["num1", "num2", "num3", "num4"];

//Sort



const App = () => {
  const [siderHeight, setSiderHeight] = useState(300);

  // Calculate the height based on the number of menu items
  const calculateSiderHeight = () => {
    const numberOfItems = array.length;
    const itemHeight = 40;
    const minHeight = 200;
    const calculatedHeight = numberOfItems * itemHeight + minHeight;
    setSiderHeight(calculatedHeight);
  };

  useEffect(() => {
    calculateSiderHeight();
  }, []);

  //sort
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const items = [
    {
      value: 'Alphabetically, A-Z',
      label: 'Alphabetically, A-Z',
    },
    {
      value: 'Alphabetically, Z-A',
      label: 'Alphabetically, Z-A',
    },
    {
      value: 'Price, low to high',
      label: 'Price, low to high',
    },
    {
      value: 'Price, high to low',
      label: 'Price, high to low',
    }
  ];


  return (
    <div>
      <HeaderSearch />
      <Space
        direction="vertical"
        style={{
          width: '100%',
          backgroundColor: '#fff',
        }}
        size={[0, 48]}
      >
        <Layout
          style={{ background: "#fff" }}
          className='search_container'>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            width={300}
            style={{
              marginRight: '20px',
              height: siderHeight + 'px', // Set the height dynamically
            }}
            className="shorter-sider"
          >
            {/* Category */}
            <div className='search_category_title'>Category</div>
            <Menu
              className='search_menu'
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              {array.map((item, index) => (
                <Menu.Item key={index}>{item}</Menu.Item>
              ))}
            </Menu>

            {/* Best seller */}
            <div style={{ marginTop: "25px" }}>
              <div className='search_category_title'>Best seller</div>

              <BestSeller />

            </div>
          </Sider>
          <Layout>
            <span>
              <Header className='search_header'>Sort by
                <Select className='search_sort_select'
                  defaultValue="Alphabetically, A-Z"
                  options={items}
                />
              </Header>
            </span>

            <Content>
              <ProductList />
            </Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
};

export default App;
