import { PropsWithChildren } from 'react';
import { MobileNav } from './mobile-nav';
import { Container } from './container';
import { Loading } from '../loading';
import { FullScreenPage } from './full-screen-page';
import { MobileHeader } from './mobile-header';

export function AppLayout({
  children,
  isLoading,
  className,
  containerHeader,
}: PropsWithChildren & {
  isLoading?: boolean;
  className?: string;
  containerHeader?: React.ReactNode;
}) {
  return (
    <>
      {!isLoading && containerHeader}
      <MobileHeader />
      <FullScreenPage>
        {isLoading && <Loading />}
        {!isLoading && <Container className={className}>{children}</Container>}
      </FullScreenPage>
      <MobileNav />
    </>
  );
}
