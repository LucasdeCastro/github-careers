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

export const Title = styled.div`
  color: #24292e;
  font-size: 28px;
  text-transform: uppercase;
  padding: 15px 0px 15px 0px;

  @media only screen and (max-width: 900px) {
    padding: 15px;
  }
`;

export const CardTitle = styled.label`
  flex: 1;
  color: #444;
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
  padding: 10px;
  border: 1px solid #e1e4e8;
  border-bottom: none;
`;

export const IssueListContainer = styled.div`
  overflow: auto;
  height: 90%;
  margin-bottom: 50px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e1e4e8;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e1e4e9;
  }
`;
