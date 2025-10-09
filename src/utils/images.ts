// Image optimization utilities

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  className?: string
}

export function getOptimizedImageProps({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
}: ImageProps) {
  return {
    src,
    alt,
    width,
    height,
    loading,
    className,
    decoding: 'async' as const,
  }
}

export function generateSrcSet(baseSrc: string, sizes: number[]): string {
  return sizes
    .map((size) => {
      const ext = baseSrc.substring(baseSrc.lastIndexOf('.'))
      const nameWithoutExt = baseSrc.substring(0, baseSrc.lastIndexOf('.'))
      return `${nameWithoutExt}-${size}w${ext} ${size}w`
    })
    .join(', ')
}

