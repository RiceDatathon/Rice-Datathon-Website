import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../title/title.js';
import './faqs.css';
import { faqs } from './faqs.json';

const Faq = props => (
    <button className='faq-card'>
        <div className='faq-question'>
            <p><strong>Q</strong>: {props.question}</p>
        </div>
        <div className='faq-answer'>
            <p><strong>A</strong>: {props.answer}</p>
        </div>
    </button>
)

const FAQs = () => {

    const qas = []

    for (let i = 0; i < faqs.length; i++) {
        qas.push(
            <Faq question={faqs[i].question} answer={faqs[i].answer} key={`${faqs[i].question.slice(0,10)}`} />
        )
    }

    return (
        <div className='faqs-page'>
            <Title title="FAQs" width={[0.5, 0.15]} />
            <Box width={[0.9, 0.5]} ml='auto' mr='auto'>
                <Flex className='questions' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {qas}
                </Flex>
            </Box>

        </div>
    )
}

export default FAQs;