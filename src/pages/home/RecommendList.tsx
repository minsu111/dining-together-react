import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import StoreCard from './StoreCard';

type RecommendListProps = {
    title: string;
    storeList: Record<string, any>;
};

const RecommendList = (props: RecommendListProps) => {
    const [duration, setDuration] = React.useState(500);

    const onWheel = (api: React.ContextType<typeof VisibilityContext>, ev: React.WheelEvent) => {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
        if (isTouchpad) {
        ev.stopPropagation();
        }
        if (ev.deltaY < 0) {
            api.scrollPrev(undefined, undefined, undefined, { duration });
        } else if (ev.deltaY > 0) {
            api.scrollNext(undefined, undefined, undefined, { duration });
            }
    }
    
    return (
        <Container>
            <Title>{props.title}</Title>
            <ScrollMenu onWheel={onWheel} >
                {props.storeList[props.title].map(
                    (storeInfo: Record<string, any>) => {
                        return (
                            <StoreCard
                                imageUrl={storeInfo.imageUrl}
                                storeName={storeInfo.storeName}
                                minCount={storeInfo.minPeople}
                                maxCount={storeInfo.maxPeople}
                                foodCategory={storeInfo.foodCategory}
                                storeUrl={`/store/${storeInfo.storeId}`}
                            />
                        );
                    },
                )}
            </ScrollMenu>
        </Container>
    );
};

export default RecommendList;

const Title = styled.h3`
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
    `;
    const Container = styled.div`
        margin: 30px 0 0 20px;
        .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
            display: none;
          }
          .react-horizontal-scrolling-menu--scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
    `;