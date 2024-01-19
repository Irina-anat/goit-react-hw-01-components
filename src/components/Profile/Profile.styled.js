import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 600px;
    margin-right: auto;
    margin-left: auto;
    background-color: #d7feff;
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
    background-color: ${p => p.theme.colors.backgroundColorAvatar};
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
color: ${p => p.theme.colors.tagLocationColor};
`

export const UserLocation = styled.p`
font-weight: 400;
font-size: 26px;
line-height: 1.26;
margin-bottom: 10px;
color: ${p => p.theme.colors.tagLocationColor};
`