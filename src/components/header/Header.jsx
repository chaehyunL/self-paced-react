import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

const HeaderTitle = styled.h1`
  color: #fcfcfd;
`;

const AddButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;



function Header({ onOpenAddModal }) {
  return (
    <Gnb onOpenAddModal={onOpenAddModal} />
  );
}

export default Header;

function Gnb({ onOpenAddModal }) {
  return (
    <HeaderContainer>
      <HeaderTitle className="text-title">점심 뭐 먹지</HeaderTitle>
      <AddButton type="button" aria-label="음식점 추가"
        onClick={onOpenAddModal}
      >
        <img src="/templates/add-button.png" alt="음식점 추가" />
      </AddButton>
    </HeaderContainer>
  );
}
