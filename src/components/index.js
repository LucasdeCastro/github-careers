import styled from 'styled-components';

export const Main = styled.div`
  width: 1200px;
  height: 100%;
  margin: 45px auto;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 1200px;
  min-height: 50px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const CardTitle = styled.label`
  flex: 1;
  color: #585858;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 27px;
  text-decoration: none;
  box-sizing: border-box;
  text-transform: uppercase;

  :hover {
    color: #3CA2E0;
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
  border-bottom: 1px solid #d1d5da;
  
   ${(props) => (props.selected ? 'border: 2px solid #3CA2E0' : '')}
   ${(props) => (props.selected ? 'background: #f1f2f2' : '')}
`;

export const LabelRow = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px 10px 0px;
`;

export const GitLabel = styled.div`
  height: 15px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
  line-height: 15px;
  border-bottom: 3px solid #${(props) => props.color};
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const TitleDate = styled.label`
  color: #ccc;
  line-height: 27px;
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
  color: #585858;

  img {
    width: 100%;
  }
`;

export const MardkdownTitle = styled.div`
  font-weight: 600;
  padding: 10px;
  border-bottom: 1px solid #d1d5da;

  position: absolute;
  background: #FFF;
  width: 750px;
  margin: -10px;

  h2 {
    margin-bottom: 5px;
    font-size: 22px;
  }
`;

export const ApplyButton = styled.button`
  color: #fff;
  margin: 10px 0px;
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
  word-wrap: break-word;
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
  cursor: pointer;
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
  display: ${(props) => (props.isLoading ? 'block' : 'none')}
  animation: donut-spin 1.2s linear infinite;
`;

export const Bold = styled.b`
  font-weight: 500;
`;

export const Message = styled.div`
  flex: 1;
  padding: 13px;
  background: #eee;
  color: #444;
  margin-top: 30px;
  border-radius: 2px;
`;

export const LoginButton = styled.button`
  color: #fff;
  padding: 3px 15px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 3px;
  margin: 0px 10px;
  background: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  cursor: pointer;
  font-weight: 600;

  :hover {
    opacity: 0.9;
  }
`;

export const IssueComponent = styled.div`
  margin-top: 30px;
`;

export const TabContainer = styled.div`
  display: flex;
`;

export const RepoTab = styled.button`
  padding: 10px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => (props.filted ? '#AAA' : '#FFF')};
  background: ${(props) => (props.filted ? '#DDD' : '#5c90d2')};
  border-radius: 5px;
  margin: 0px 10px 20px 0px;
  border: 1px solid ${(props) => (props.filted ? '#d1d5da' : '#FFF')};
`;

export const ShareButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  background: #5c90d2;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const ScrollContainer = styled.div`
  overflow-y: scroll;
  background: #FFF;
  height: calc(100vh - 200px);
  border: 1px solid #d1d5da;
`;
