/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { styled, withStyle } from 'baseui';
import { Button, KIND } from 'baseui/button';
import { StyledTable, StyledBody, StyledRow, StyledCell } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { arrayOf, shape, node, number, func, oneOfType } from 'prop-types';

const BaseButton = {
    style: ({ $theme }) => ({
        color: $theme.colors.mono600,
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':focus': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':active': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':disabled': {
            cursor: 'not-allowed',
            backgroundColor: 'transparent',
            color: $theme.colors.buttonDisabledText
        }
    })
};

const PaginationContainer = styled('div', ({ $theme }) => {
    const { sizing } = $theme;

    return {
        paddingTop: sizing.scale600,
        paddingBottom: sizing.scale600,
        display: 'flex'
    };
});

const NextButton = {
    component: ({ onClick }) => (
        <Button
            kind={KIND.minimal}
            onClick={onClick}
            overrides={{ BaseButton }}
        >
            &gt;
        </Button>
    )
};

const PrevButton = {
    component: ({ onClick }) => (
        <Button
            kind={KIND.minimal}
            onClick={onClick}
            overrides={{ BaseButton }}
        >
            &lt;
        </Button>
    )
};

const MaxLabel = {
    style: ({ $theme }) => ({
        backgroundColor: 'transparent',
        color: $theme.colors.mono600
    })
};

const DropdownContainer = {
    style: ({ $theme }) => ({
        backgroundColor: $theme.colors.mono200
    })
};

const StyledHeadlessTable = withStyle(StyledTable, ({ $theme }) => ({
    backgroundColor: 'transparent',
    marginTop: $theme.sizing.scale400
}));

const StyledTableCell = withStyle(StyledCell, {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
});

// https://baseweb.design/components/table/
export const PaginatedItems = ({ data, pageSize, renderer }) => {
    const [page, setPage] = useState(1);

    const handlePageChange = nextPage => {
        if (nextPage < 1) {
            return;
        }
        if (nextPage > Math.ceil(data.length / pageSize)) {
            return;
        }
        setPage(nextPage);
    };

    const view = () => {
        const min = (page - 1) * pageSize;
        const sliced = data.slice(min, min + pageSize);

        return sliced.map((row, index) => (
            <StyledRow key={index}>
                <StyledTableCell>{renderer(row)}</StyledTableCell>
            </StyledRow>
        ));
    };

    return (
        <>
            <div>
                <StyledHeadlessTable>
                    <StyledBody $width="100%">{view()}</StyledBody>
                </StyledHeadlessTable>
            </div>
            {data.length > pageSize && (
                <PaginationContainer>
                    <Pagination
                        currentPage={page}
                        numPages={Math.ceil(data.length / pageSize)}
                        onPageChange={({ nextPage }) =>
                            handlePageChange(nextPage)
                        }
                        overrides={{
                            NextButton,
                            PrevButton,
                            MaxLabel,
                            DropdownContainer
                        }}
                    />
                </PaginationContainer>
            )}
        </>
    );
};

PaginatedItems.propTypes = {
    data: arrayOf(shape).isRequired,
    pageSize: number.isRequired,
    renderer: oneOfType([node, func]).isRequired
};
