export const stopPropagation: any = {
  onAnimationIteration: (e: React.AnimationEvent<HTMLDivElement>) => e.stopPropagation(),
  onAnimationEnd: (e: React.AnimationEvent<HTMLDivElement>) => e.stopPropagation(),
  onAnimationStart: (e: React.AnimationEvent<HTMLDivElement>) => e.stopPropagation(),
}
