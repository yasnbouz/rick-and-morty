import { m as motion, MotionAdvancedProps, useAnimation, Variants } from 'framer-motion';
import { ComponentChildren, FunctionComponent } from 'preact';
import { forwardRef } from 'preact/compat';
import { useEffect, useMemo } from 'preact/hooks';

type Props = {
  revealOnScroll?: boolean;
  inView?: boolean;
  delay?: number;
  children: ComponentChildren;
};
// ----------------------------------------------------------------------------------------------------------------------

export const BlockReveal: FunctionComponent<Props> = ({ children, inView, revealOnScroll = false, delay = 0, ...props }) => {
  const controls = useAnimation();
  const container: Variants = useMemo(
    () => ({
      initial: { position: `absolute`, backgroundColor: `white`, width: `100%`, height: `100%`, zIndex: 2, x: `-110%` },
      animate: { x: [`-110%`, `0%`, `110%`], transition: { duration: 0.9, type: `tween`, ease: `easeOut`, delay: 0.3 + delay } },
    }),
    [delay],
  );
  const item: Variants = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0, delay: 0.8 + delay } },
    }),
    [delay],
  );

  useEffect(() => {
    if (revealOnScroll) {
      if (inView) {
        controls.start(`animate`);
      } else {
        controls.start(`initial`);
      }
    }
  }, [revealOnScroll, inView]);

  useEffect(() => {
    if (!revealOnScroll) {
      controls.start(`animate`);
    }
  }, [revealOnScroll]);
  return (
    <motion.div initial={{ position: `relative`, overflow: `hidden`, display: `inline-block` }} {...props}>
      <motion.div initial="initial" animate={controls} variants={container} aria-hidden="true" />
      <motion.span initial="initial" animate={controls} variants={item}>
        {children}
      </motion.span>
    </motion.div>
  );
};
// ----------------------------------------------------------------------------------------------------------------------

export const FadeUp = forwardRef<HTMLDivElement, MotionAdvancedProps & Props>(({ children, inView, revealOnScroll = false, delay = 0, ...props }, ref) => {
  const controls = useAnimation();
  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: delay + i * 0.3, type: `tween`, ease: `easeOut` } }),
    }),
    [delay],
  );
  useEffect(() => {
    if (revealOnScroll) {
      if (inView) {
        controls.start(`visible`);
      } else {
        controls.start(`hidden`);
      }
    }
  }, [revealOnScroll, inView]);

  useEffect(() => {
    if (!revealOnScroll) {
      controls.start(`visible`);
    }
  }, [revealOnScroll]);

  return (
    <motion.div initial="hidden" animate={controls} variants={variants} {...props} ref={ref}>
      {children}
    </motion.div>
  );
});

export const FadeLeft: FunctionComponent<Props> = ({ children, inView, revealOnScroll = false, delay = 1, ...props }) => {
  const controls = useAnimation();
  const variants: Variants = useMemo(
    () => ({
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { type: `tween`, duration: 1.25, delay, ease: `easeOut` } },
    }),
    [delay],
  );
  useEffect(() => {
    if (revealOnScroll) {
      if (inView) {
        controls.start(`visible`);
      } else {
        controls.start(`hidden`);
      }
    }
  }, [revealOnScroll, inView]);

  useEffect(() => {
    if (!revealOnScroll) {
      controls.start(`visible`);
    }
  }, [revealOnScroll]);

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} {...props}>
      {children}
    </motion.div>
  );
};
// ----------------------------------------------------------------------------------------------------------------------

export const FadeRight: FunctionComponent<MotionAdvancedProps & Props> = ({ children, inView, revealOnScroll = false, delay = 0, ...props }) => {
  const controls = useAnimation();
  const variants: Variants = useMemo(
    () => ({ hidden: { opacity: 0, x: 100 }, visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 1.3, delay: i * 0.3 + delay } }) }),
    [delay],
  );

  useEffect(() => {
    if (revealOnScroll) {
      if (inView) {
        controls.start(`visible`);
      } else {
        controls.start(`hidden`);
      }
    }
  }, [revealOnScroll, inView]);

  useEffect(() => {
    if (!revealOnScroll) {
      controls.start(`visible`);
    }
  }, [revealOnScroll]);

  return (
    <motion.div initial="hidden" animate={controls} variants={variants} {...props}>
      {children}
    </motion.div>
  );
};
