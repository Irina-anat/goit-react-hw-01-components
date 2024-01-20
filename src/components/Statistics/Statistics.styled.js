import styled from "styled-components";

export const StatisticsCard = styled.section`
    width: 500px;
    margin: auto;
    margin-left: auto;
    margin-bottom: 50px;
    padding: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color:  ${p => p.theme.colors.bgColorCard};
`

export const StatTitle = styled.h2`
    font-weight: 700;
    font-size: 40px;
    line-height: 1.65;
    margin-bottom: 50px;
    text-align: center;
    color:  ${p => p.theme.colors.greyColor};
`

export const StatList = styled.ul`
    display: flex;
    padding: 0;
    justify-content: space-around;
    height: 100px;
`

export const StatsCard = styled.li`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.26;
    width: 100%;
    height: 100%;
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.colors.colorStatsText};
`
