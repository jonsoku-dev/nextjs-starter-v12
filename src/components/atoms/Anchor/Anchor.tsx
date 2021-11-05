/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export interface AnchorProps {
  /**
   * Client routing href
   */
  href: string
  /**
   * Anchor text
   */
  text: string
  /**
   * Text color
   */
  textColor?: string
}

const Text = styled.a<{ color?: string }>`
  color: ${(props) => props.color};
`

export const Anchor: React.VFC<AnchorProps> = ({
  href,
  text,
  textColor = '#000',
}) => {
  console.log(text)
  return (
    <Link href={href}>
      <Text color={textColor}>{text}</Text>
    </Link>
  )
}
