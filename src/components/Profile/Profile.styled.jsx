import styled from "@emotion/styled"

export const Card = styled.div`
border: 1px solid #111111;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
border-radius: 15px;
margin: 0 auto;
text-align: center;
width: 250px;
heigth: 200px;
background-color: #B0E0E6;
`

export const Photo = styled.img`
  width: 90px;
  border-radius: 50%;
  margin: 30px 0 24px 0
`

export const NameUser = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
margin: 5px 0 5px 0;
`

export const OtherInfo = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.03em;
color: #757575;
margin-top: 0;
margin-bottom: 0;
`

export const List = styled.ul`
display: flex;
list-style: none;
margin: 20px 0 0 0;
justify-content: space-around;
padding: 0;
width: 100%;
height: 100%;
background-color: #87CEEB;
border-top: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 0 0 15px 15px;
` 

export const LiPosition = styled.li`
display: flex;
  flex-direction: column;
  padding: 20px 18px 20px 0;

  &:not(:last-child) {
    border-right: 1px solid rgba(33, 33, 33, 0.2);
  }
`

export const NameStatics = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.03em;
color: #757575;
margin-top: 0;
margin-bottom: 0;
`

export const Numbers = styled.span`
font-weight: 700;
font-size: 15px;
line-height: 14px;
letter-spacing: 0.03em;
margin: 5px 0 5px 0;
`