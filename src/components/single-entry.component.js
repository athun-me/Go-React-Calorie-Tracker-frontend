import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css'

import {Button, Card, Row, Col} from 'react-bootstrap'

const Entry =({entryData, setChangeIngredient, deleteSingleEntry, setChangeEntry}) => {
    return(
        <Card className='m-2'>
            <Row >
                <Col>Dish:{entryData !== undefined && entryData.dish}</Col>
                <Col>Ingredients:{entryData !== undefined && entryData.ingredients}</Col>
                <Col>Calories:{entryData !== undefined && entryData.calories}</Col>
                <Col>Fat:{entryData !== undefined && entryData.fat}</Col>
                <Col><Button className='m-2' onClick={()=> deleteSingleEntry(entryData._id)}>delete entry</Button></Col>
                <Col><Button className='mt-2' onClick={()=> changeIngredient()}>change ingredients</Button></Col>
                <Col><Button className='m-2' onClick={()=> changeEntry()}>change entry</Button></Col>
            </Row>
        </Card>
    )

    function changeIngredient(){
        setChangeIngredient(
            {
                "change": true,
                "id":entryData._id
            }
        )
    }

    function changeEntry(){
        setChangeEntry(
            {
                "change": true,
                "id":entryData._id
            }
        )
    }
}

export default Entry