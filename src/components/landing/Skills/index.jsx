import React, { useContext, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, Button, CheckBox, CheckBoxLabel } from '../../common';
import { Wrapper, SkillsWrapper, Details } from './styles';

const short =
  "Hello! As you can see from the header above, my name is Matt and I'm a self taught developer specializing in React.js. ";

const long = `Hello! As you can see from the header above, my name is Matt and I'm a self taught developer specializing in React.js. I graduated from UC Santa Barbara in 2018 with a B.A. in Biological Anthropology Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem tenetur odio eos id excepturi libero minus, quas corrupti saepe qui totam error assumenda consequuntur! Explicabo exercitationem unde esse minima iusto nam repudiandae eveniet tempora eaque, laboriosam porro a harum saepe in! Explicabo, enim magnam excepturi doloremque quis eveniet dolorum alias? Veniam porro doloribus dolorem, nesciunt qui minus dolorum veritatis? Fugiat facere veritatis molestias similique, inventore sint totam quae praesentium doloribus, natus eum. Minus atque ipsam, iste unde minima ex velit alias laboriosam sint architecto. Quod, quo. Ut soluta, ipsum, eos necessitatibus esse architecto tenetur temporibus ducimus optio libero eligendi?

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores magni dolore accusantium autem pariatur, consequatur expedita facilis mollitia illo, asperiores minima ea voluptates suscipit ex!`;

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [aboutLength, setAboutLength] = useState(short);

  // const toggleLength = () => {

  // }

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        {/* <Thumbnail>
          <img src={skill} alt="I'm Matt! A fullstack web dev." />
        </Thumbnail> */}
        <Details theme={theme}>
          <h1>
            A{' '}
            <CheckBox
              id="checkbox1"
              type="radio"
              name="length-toggle"
              // Allow short to be selected by default
              defaultChecked
              onClick={() => setAboutLength(short)}
            />
            <CheckBoxLabel htmlFor="checkbox1">little</CheckBoxLabel>
            <CheckBox
              id="checkbox2"
              type="radio"
              name="length-toggle"
              onClick={() => setAboutLength(long)}
            />
            {'  '}
            <CheckBoxLabel htmlFor="checkbox2">lot</CheckBoxLabel> about me.
          </h1>
          <p>{aboutLength}</p>
          <Button as={AnchorLink} href="#contact">
            Hire me plz i like $$
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
