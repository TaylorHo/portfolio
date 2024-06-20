/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

import PostLayout from '@/layouts/PostLayout.js'
import PostSimple from '@/layouts/PostSimple.js'
import SnippetsLayout from '@/layouts/SnippetsLayout.js'
import ListLayout from '@/layouts/ListLayout.js'
import AuthorLayout from '@/layouts/AuthorLayout.js'
import SpecialLink from './SpecialLink'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  SpecialLink: SpecialLink,
  wrapper: ({ components, layout, ...rest }) => {
    switch (layout) {
      case 'PostLayout':
        return <PostLayout {...rest} />
      case 'PostSimple':
        return <PostSimple {...rest} />
      case 'SnippetsLayout':
        return <SnippetsLayout {...rest} />
      case 'ListLayout':
        return <ListLayout {...rest} />
      case 'AuthorLayout':
        return <AuthorLayout {...rest} />
      default:
        return <PostLayout {...rest} />
    }
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
