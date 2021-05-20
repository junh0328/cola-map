import React from 'react';
import Modal from '../Modal';
import { SearchModalInput } from './style';

const SearchModal = ({ show, onCloseModal }) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form>
        <SearchModalInput type="text" placeholder="카카오 검색 api 등록 요망" />
      </form>
    </Modal>
  );
};

export default SearchModal;
