import React from "react";
import styled from "styled-components";

export const Main = styled.div`
  width: 900px;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: #fafafa;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e4e8;

  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;

  @media only screen and (max-width: 900px) {
    color: #ffffff;
    font-size: 20px;
    background: #000000;
  }
`;

export const HeaderContainer = styled.div`
  width: 900px;
  padding: 15px;
  color: #24292e;
  margin: 0 auto;
  font-size: 20px;
  text-transform: uppercase;

  @media only screen and (max-width: 900px) {
    color: #ffffff;
    background: #000000;
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
  border: 1px solid #e1e4e8;
  border-bottom: 0px;

  :last-child {
    border-bottom: 1px solid #e1e4e8;
  }
`;

export const LabelRow = styled.div`
  margin: 10px 0px;
`;

export const GitLabel = styled.a`
  height: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
  line-height: 15px;
  padding: 0.15em 4px;
  border-bottom: 3px solid #${props => props.color};
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const TitleDate = styled.label`
  color: #ccc;
`;

export const MarkdownContainer = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: none;
  flex-direction: column;
  border: 1px solid #e1e4e8;
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
  height: 90%;
  overflow: auto;
  margin: 75px 0px 50px 0px;
`;
