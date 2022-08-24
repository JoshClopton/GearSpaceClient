import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateItem from "../../components/CreateItem/CreateItem";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import ShelfCard from "../../components/ShelfCard/ShelfCard";

const Shelves = () => {
  let { shelfId } = useParams();

  //response from axios call to grag all shelves for a particular user
  const [shelfData, setShelfData] = useState(null);
  //selectedItem is for setting state to be the item that is selected when the user clicks edit
  const [selectedItem, setSelectedItem] = useState(null);
  //changes state when the user clicks the delete button
  const [itemToDelete, setItemToDelete] = useState(null);
  //this function gets called when a user clicks edit. It sets state to be the selected item

  //Toggle state when user deletes an item so useEffect runs and shows only current items
  const [itemWasDeleted, setItemWasDeleted] = useState(false);

  const handleShowPopup = (itemId) => {
    setSelectedItem(itemId);
  };

  //when user clicks the delete button it calls this function and passes in the selected item.
  const handleCloseModal = () => {
    itemWasDeleted ? setItemWasDeleted(false) : setItemWasDeleted(true);

    setSelectedItem(false);
    setItemToDelete(false);
  };

  const toggleOverlay =
    selectedItem || itemToDelete ? "overlay--display" : "overlay--hide";

  useEffect(() => {
    axios
      .get(`http://localhost:8000/shelves/${shelfId}`, {
        withCredentials: true,
      })
      .then((res) => {
        const shelves = res.data;

        setShelfData(shelves);
      });
  }, [itemWasDeleted, shelfId]);

  const handleShowDelete = (itemId) => {
    setItemToDelete(itemId);
    itemWasDeleted ? setItemWasDeleted(false) : setItemWasDeleted(true);
  };

  return (
    <div className="shelves">
      <div className={toggleOverlay} />

      {shelfData && shelfData.length ? (
        <span className="shelves__title">{shelfData[0].shelf}</span>
      ) : null}
      <div className="shelves__main">
        {shelfData && shelfData.length
          ? shelfData.map((shelf) => {
              return (
                <ShelfCard
                  shelf={shelf}
                  handleShowDelete={handleShowDelete}
                  handleShowPopup={handleShowPopup}
                  key={shelf.id}
                />
              );
            })
          : null}
        {selectedItem ? (
          <CreateItem
            selectedItem={selectedItem}
            isCreate={false}
            handleCloseModal={handleCloseModal}
            shelfData={shelfData}
          />
        ) : null}

        {itemToDelete ? (
          <ConfirmDeleteModal
            itemToDelete={itemToDelete}
            shelfData={shelfData}
            handleCloseModal={handleCloseModal}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Shelves;
