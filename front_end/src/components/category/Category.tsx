import React, { ReactElement } from 'react'

import { inject, observer } from "mobx-react";

import ReactGA from 'react-ga';

import 'components/category/category.scss';

interface Props {
    categoryClickCallback: Function;
}

function Category({ categoryClickCallback }: Props): ReactElement {
    const categoryList: string[] = ["음식점", "편의점", "주유소", "학원", "병원", "레저업소", "보건위생", "기타"];
    
    const handleIconClick = (event: any) => {
        const extractFromClassName = /item\d/.exec(event.target.className);
        if(extractFromClassName){
            const itemNumber = /\d/.exec(extractFromClassName[0]);
            if(itemNumber){
                const idx = parseInt(itemNumber[0]);
                const category = categoryList[idx];
                categoryClickCallback(category);
            }
        }
    }

    return (
        <div id="category">
            {categoryList.map((category, idx) => {
                return (
                    <div className={`menu item${idx}`} key={idx} onClick={(event: any) => {
                        handleIconClick(event);
                        ReactGA.ga('send', 'event', 'event_category', category, 'event_label');
                    }}>
                        <div className="item-title">{category}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default inject(({ merchant, letsMap }) => ({
}))(observer(Category));
