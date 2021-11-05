/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import Link from 'next/link'
import React from 'react'

export interface AnchorProps {
  href: string
  text: string
}

export const Anchor: React.VFC<AnchorProps> = ({ href, text }) => {
  console.log(text)
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}
