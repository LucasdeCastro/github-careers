import styled from "styled-components";

export const Main = styled.div`
  width: 900px;
  height: 100%;
  margin: 45px auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px 12px;
  border-radius: 3px;
  margin: 20px 0px;
`;

export const Header = styled.div`
  background: #24292e;
  color: rgba(255, 255, 255, 0.75);
  box-sizing: border-box;

  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
`;

export const HeaderContainer = styled.div`
  width: 900px;
  min-height: 45px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const CardTitle = styled.label`
  flex: 1;
  color: #444;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  box-sizing: border-box;
  text-transform: uppercase;

  :hover {
    color: #0366d6;
  }

  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Card = styled.div`
  display: flex;
  cursor: pointer;
  min-height: 80px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #fff;
  padding: 15px 15px 5px 15px;
  border: 1px solid #d1d5da;
  margin-top: 5px;
  border-radius: 2px;
`;

export const LabelRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

export const GitLabel = styled.div`
  height: 15px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-right: 5px;
  line-height: 15px;
  padding: 5px 4px 0.5em 4px;
  border-bottom: 3px solid #${props => props.color};
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const TitleDate = styled.label`
  color: #ccc;
  padding-left: 5px;
`;

export const MarkdownContainer = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: none;
  flex-direction: column;
  border: 1px solid #e1e4e8;
  border-top: 0px;
  background: #fff;
  z-index: -1;

  img {
    width: 100%;
  }
`;

export const ApplyButton = styled.button`
  color: #fff;
  margin: 10px;
  border: none;
  width: 130px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  background: #21b6a8;
  align-self: flex-start;
  text-transform: capitalize;

  @media only screen and (max-width: 900px) {
    width: 90%;
    align-self: center;
  }
`;

export const IssueListContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  overflow: auto;
  flex-direction: column;
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 5px;
  background: #21b6a8;
  text-transform: capitalize;

  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  flex: 1;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  text-transform: uppercase;
`;

export const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  border-radius: 2px;
  color: #fff;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.125);

  option {
    border: 0px;
  }

  :focus {
    color: #444;
    border: 0px;
    background: #fff;
  }
`;

export const Loading = styled.div`
  width: 22px;
  height: 22px;
  margin: 10px auto;
  border-radius: 50px;
  border: 3px solid rgba(210,210,210,.7);
  border-left-color: #39BF80;
  display: ${props => (props.isLoading ? "block" : "none")}
  animation: donut-spin 1.2s linear infinite;
`;

export const Bold = styled.b`
  font-weight: 500;
`;
