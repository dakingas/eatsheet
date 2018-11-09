// this is important, otherwise you'll completely replace the `'react'` module
export {};

declare module "react" {
  export interface ExoticComponent<P = {}> {
    /**
     * # WARNING
     *
     * Exotic components are not actually callable
     *
     * @deprecated Exotic components are not callable
     */
    (props: P): React.ReactElement<any> | null;
    readonly $$typeof: symbol;
  }

  export type ComponentProps<
    T extends React.ComponentType<any>
  > = T extends React.ComponentType<infer P> ? P : {};
  export type ComponentPropsWithRef<
    T extends React.ComponentType<any>
  > = T extends React.ComponentClass<infer P>
    ? P & React.ClassAttributes<InstanceType<T>>
    : T extends React.SFC<infer P> ? P : {};

  export function memo<P extends object>(
    Component: React.SFC<P>,
    propsAreEqual?: (
      prevProps: Readonly<P & { children?: React.ReactNode }>,
      nextProps: Readonly<P & { children?: React.ReactNode }>
    ) => boolean
  ): ExoticComponent<P>;
  export function memo<T extends React.ComponentType<any>>(
    Component: T,
    propsAreEqual?: (
      prevProps: Readonly<ComponentProps<T>>,
      nextProps: Readonly<ComponentProps<T>>
    ) => boolean
  ): ExoticComponent<ComponentPropsWithRef<T>>;

  /**
   * This feature is not yet available for server-side rendering.
   * Suspense support will be added in a later release.
   */
  export const Suspense: ExoticComponent<{
    children?: React.ReactNode;

    /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
    fallback: NonNullable<React.ReactNode> | null;

    // I tried looking at the code but I have no idea what it does.
    // https://github.com/facebook/react/issues/13206#issuecomment-432489986
    /**
     * Not implemented yet, requires unstable_ConcurrentMode
     */
    // maxDuration?: number
  }>;

  export function lazy<T extends React.ComponentType<any>>(
    factory: () => Promise<{ default: T }>
  ): ExoticComponent<ComponentPropsWithRef<T>>;
}
