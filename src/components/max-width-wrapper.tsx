import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type MaxWidthWrapperProps = ComponentProps<'div'>

function MaxWidthWrapper({ className, ...props }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
      {...props}
    />
  )
}

export default MaxWidthWrapper
