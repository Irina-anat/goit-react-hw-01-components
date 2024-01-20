import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 600px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${p => p.theme.colors.bgColorCard};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin-bottom: 50px;
    margin-top: 50px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`

export const AvatarImg = styled.img`
    border-radius: 50%;
    margin-bottom: 20px;
    border: solid 4px ${p => p.theme.colors.borderColor};
    background-color: ${p => p.theme.colors.bgColorAvatar};
`

export const UserName = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.26;
    margin-bottom: 10px;
`

export const UserTag = styled.p`
font-weight: 400;
font-size: 26px;
line-height: 1.26;
margin-bottom: 10px;
color: ${p => p.theme.colors.greyColor};
`

export const UserLocation = styled.p`
font-weight: 400;
font-size: 26px;
line-height: 1.26;
margin-bottom: 10px;
color: ${p => p.theme.colors.greyColor};
`

export const Stats = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
margin: auto;
padding: 0px;
background-color: ${p => p.theme.colors.bgColorStats};
`

export const StatsCards = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100%/3);
    border: 2px solid ${p => p.theme.colors.borderColor};
    padding-top: 50px;
    padding-bottom: 50px;  
`

export const LabelStats = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.65;
    color: ${p => p.theme.colors.greyColor};
`

export const QuantityStats = styled.span`
    font-weight: 700;
    font-size: 26px;
    line-height: 1.65;
`