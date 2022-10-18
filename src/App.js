import React, {useState, useEffect} from "react";
import axios from "axios";

import "./components/card/Card"
import Card from "./components/card/Card";
import Popup from "./components/popup/Popup";

import useDebounce from "./utils/useDebounce";


const API_HOST = process.env.REACT_APP_API_HOST;



function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [cardActive, setCardActive] = useState();


  const debouncedSearchValue = useDebounce(searchValue, 500);


  useEffect(()=>{
      searchUsers(debouncedSearchValue);
  },[debouncedSearchValue]);

  const searchUsers = async (searchQuery) => {
    const fullUrl = searchQuery ? `${API_HOST}?term=${searchQuery}` : API_HOST;
    setIsSearching(true);

    return axios.get(fullUrl).then(res=>{
      setIsSearching(false);
      setItems(res.data);
    });
  }

  const onChangeSearchInput=(event)=>{
    setSearchValue(event.target.value);
  };

  let searchIcon = searchValue ? <img className="employees__close__icon" width="25px" height="25px" src="../img/close.svg" alt="close" onClick={()=>setSearchValue("")} />
  : <img className="employees__search__icon" width="25px" height="25px" src="../img/search.svg" alt="search"/>;

  searchIcon = isSearching ? <img className="employees__search__icon spin" src="../img/loader.svg" width="25px" height="25px" alt="load" /> : searchIcon

  const onCardClickHandler=(e)=>{
    const indexCard = e.currentTarget.getAttribute("data-obj-id");
    setModalActive(true);
    setCardActive(items[indexCard]);
  }


  return (
    <div className="App">

      <div className="employees">
        <form action="" method="get" className="employees__search">
          <input onChange={onChangeSearchInput} placeholder="Поиск..." type="search" value={searchValue}/>
          {searchIcon}
        </form>
        
        <div className="employees__cards">
        {
          items.map((obj, index)=>
            <Card 
              onClickCard={onCardClickHandler}
              data-obj-id={index}
              key={obj.email}
              title={obj.name}
              phone={obj.phone}
              email={obj.email}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />)
        }


          
        </div>

        

      </div>

      <Popup
        active={modalActive}
        onModalClose={()=>setCardActive(null)}
        setActive={setModalActive}
        item={cardActive}
      />





    </div>
  );

  
}



export default App;
