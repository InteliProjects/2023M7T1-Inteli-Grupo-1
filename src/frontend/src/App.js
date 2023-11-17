import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBarContainer from './components/SearchBar.module.css';
import Head from './components/Head';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import AddButton from './components/AddButton';
import CreateModal from './components/CreateModal';
import EditModal from './components/EditModal';

function App() {

  const [formData, setFormData] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    try {
      const response = fetch('http://ec2-44-207-167-11.compute-1.amazonaws.com:3000/user/readall')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response); 
        setFilteredData(response)
      })
    } catch (error) {
      console.error(error);
    };
  }, []);

  async function deleteData(id) {
    console.log(id[2]);
    try {
      const response = fetch(`http://ec2-44-207-167-11.compute-1.amazonaws.com:3000/user/delete/${id[2]}`, {
        method: 'DELETE',
      })
      .then((response) => console.log(response.json()))
      .then(setFilteredData([...data, formData]));

    } catch (error) {
      console.error(error);
    };
  }

  async function createData(id) {
    console.log('Create');

    console.log(formData);
    try {
      const response = fetch('http://ec2-44-207-167-11.compute-1.amazonaws.com:3000/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(setCreateModalVisibility(false))
      .then(setFilteredData([...data, formData]));

    } catch (error) {
      console.error('An error occurred', error);
    }

  }

  async function updateData() {

  }

  const titleName = "LISTONES";

  let titles = ["name", "last_name", "id"];

  const handleSearch = (searchText) => {
    console.log(searchText);
    setFilteredData(data.filter((item) => item.name?.includes(searchText) || item.last_name?.includes(searchText)));
  };

  let rows = filteredData?.map((item) => {
    return [item.name, item.last_name, item.id];
  });

  const [createModalVisible, setCreateModalVisibility] = useState(false);
  const [editModalVisible, setEditModalVisibility] = useState(false);

  return (
    <>
      {createModalVisible && (<CreateModal
        formDataProps={{
          formData: formData,
          setFormData: setFormData
        }}
        title="Create Contact"
        fields={["name", "last_name", "id"]}
        hideModal={() => setCreateModalVisibility(false)}
        actionName="Create"
        actionFunction={createData}
      />)}
      {editModalVisible && (<EditModal
        title="Edit Contact"
        fields={["name", "last_name", "id"]}
        hideModal={() => setEditModalVisibility(false)}
        actionName="Update"
        actionFunction={updateData}
      />)}
      <div className="App">
        <Head word={titleName}/>
      </div>
      <div className={SearchBarContainer.searchBarContainer}>
        <SearchBar onSearch={handleSearch} />
        <AddButton
          showModal={() => setCreateModalVisibility(true)}
        />
      </div>
      <Table 
        rows={rows || []}
        titles={titles}
        delFunction={deleteData}
        showModal={() => setEditModalVisibility(true)}
      />
    </>
  );  
}

export default App;
