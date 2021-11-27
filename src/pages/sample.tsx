/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React, { useEffect } from 'react'
import { animateScroll, Element, Events, Link } from 'react-scroll'
import styled from 'styled-components'

export interface SamplePageProps {}

const SamplePage: React.FC<SamplePageProps> = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', to, element)
    })
    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to, element)
    })
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <Container>
      <header>
        <ul>
          <Link
            activeClass={'jonsoku'}
            spy={true}
            smooth={true}
            duration={250}
            to="item1"
            onSetActive={() => console.log('active')}
          >
            ITEM1
          </Link>
          <Link
            activeClass={'jonsoku'}
            spy={true}
            smooth={true}
            duration={250}
            to="item2"
          >
            ITEM2
          </Link>
          <Link
            activeClass={'jonsoku'}
            spy={true}
            smooth={true}
            duration={250}
            to="item3"
          >
            ITEM3
          </Link>
          <Link
            activeClass={'jonsoku'}
            spy={true}
            smooth={true}
            duration={250}
            to="item4"
          >
            ITEM4
          </Link>
          <Link
            activeClass={'jonsoku'}
            spy={true}
            smooth={true}
            duration={250}
            to="item5"
          >
            ITEM5
          </Link>
        </ul>
      </header>
      <Element name="item1">ITEM1</Element>
      <Element name="item2">ITEM2</Element>
      <Element name="item3">ITEM3</Element>
      <Element name="item4">ITEM4</Element>
      <Element name="item5">ITEM5</Element>
      <button onClick={() => animateScroll.scrollToTop({})}>ITEM6</button>
    </Container>
  )
}

export default SamplePage

const Container = styled.div`
  header {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: yellow;
    height: 120px;

    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;

      .jonsoku {
        color: red;
      }

      li {
        list-style: none;

        .jonsoku {
          color: red;
        }
      }
    }
  }

  > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    border-bottom: 5px solid black;
    box-sizing: border-box;
  }
`
