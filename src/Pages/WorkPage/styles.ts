import {  Card, Grid, styled } from "@mui/material";



interface IWorkPageProps {
    isCheck?: boolean;
}

export const WorkPageContainer = styled(Grid)`
    min-height: 80vh;
    padding: 0 60px;
    margin: 0 auto;
    max-width: 1440px;
    display: grid;
    gap: 0 2rem;
    justify-content: center;
    align-items: center;
    .MuiTypography-root {
        font-size: 1.5rem;
        font-weight: 500;
        color: #c3c3c3;
        margin-bottom: 20px;
    }

    .MuiBox-root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    /* access tag FaCheck */
    .arrow {
        color: #fdc201;
        font-size: 5.5rem;
        margin: 0 10px;
    }
    .arrow-2 {
        color: #c3c3c3;
        font-size: 5.5rem;
        margin: 0 10px;
    }
`;


export const CardWork = styled(Card)<IWorkPageProps>`
    width: 100%;
    height: 200px;
    max-width: 200px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .MuiCardContent-root {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1rem;

        .icon {
            display: inline-block;
            margin: 0 auto;
            color: ${({ isCheck }) => (isCheck ? '#FDC201' : '#C3C3C3')};
            width: 100%;
            height: 100%;
        }
        .MuiTypography-h5 {
            font-size: 1.2rem;
            font-weight: 500;
            color: ${({ isCheck }) => (isCheck ? '#FDC201' : '#C3C3C3')};
            margin-bottom: 20px;
        }
    }
`;