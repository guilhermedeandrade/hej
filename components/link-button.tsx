import Link from 'next/link'
import type { ReactElement } from 'react'

interface Props {
  content: string
  className?: string
  href: string
}

export default function LinkButton({
  content,
  className,
  href,
}: Props): ReactElement {
  return (
    <Link href={href}>
      <button className={className}>{content}</button>
    </Link>
  )
}
