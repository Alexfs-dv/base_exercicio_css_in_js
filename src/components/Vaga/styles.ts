import styled from 'styled-components'

const Vacancy = styled.li`
  border: 1px solid #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  padding: 16px;
  transition: all ease 0.5s;
  border-radius: 8px;

  &:hover {
    background-color: #a7727d;
    color: #f9f5e7;

    a {
      border-color: #a7727d;
      background-color: #f9f5e7;
      color: #a7727d;
    }
  }

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: #f9f5e7;
    background-color: #a7727d;
    color: #f9f5e7;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bolde;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
export default Vacancy
