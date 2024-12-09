import { createFileRoute, Link } from '@tanstack/react-router';
import { Logo } from '@/components/misc/logo';
import {
  Carousel,
  CarouselContent,
  CarouselControlledShowComponent,
  CarouselIndicator,
  CarouselNext,
} from '@/components/ui/carousel';
import WelcomeCarouselItem from '@/components/misc/home/welcome-carousel';
import { Button } from '@/components/ui/button';
import { PublicRoute } from '@/components/auth/public-route';
import { FullScreenPage } from '@/components/layout/full-screen-page';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <PublicRoute>
      <Logo className="absolute top-12 left-1/2 -translate-x-1/2" />
      <FullScreenPage className='max-w-xl mx-auto py-12 px-4'>
        <Carousel>
          <CarouselContent>
            <WelcomeCarouselItem
              imgSrc="/img/welcome/welcome_img_1.svg"
              title="Aprenda Química de um jeito divertido"
              description="A Lab Quest traz a química para você de uma maneira acessível e envolvente, feita para todos os brasileiros."
              maxHeight='230.08px'
            />
            <WelcomeCarouselItem
              imgSrc="/img/welcome/welcome_img_2.svg"
              title="Ganhe pontos  e avance na sua jornada"
              description="Complete exercícios, acumule pontos e desbloqueie novos conhecimentos e atividades."
              maxHeight='195.16px'
            />
            <WelcomeCarouselItem
              imgSrc="/img/welcome/welcome_img_3.svg"
              title="Aprenda e explore curiosidades"
              description="Descubra como a química está presente no seu dia a dia enquanto aprende novos conceitos."
              maxHeight='228.85px'
            />
          </CarouselContent>
          <div className="mt-6 flex justify-center items-center">
            <CarouselIndicator />
          </div>
          <footer className='flex justify-center items-center mt-16 px-8 gap-4 flex-col'>
            {/* This component will only render its children if it is the last slide and the carousel cannot scroll next */}
            <CarouselControlledShowComponent last={true}>
              <Link to="/sign-up" className='w-full'>
                <Button variant="default" className='w-full' size='rounded'>

                  Criar sua conta
                </Button>
              </Link>
            </CarouselControlledShowComponent>
            {/* This component will only render its children if it is not the last slide and the carousel can scroll next */}
            <CarouselControlledShowComponent last={false}>
              <CarouselNext size="rounded" className='w-full' variant="default">
                Próximo
              </CarouselNext>
            </CarouselControlledShowComponent>
            {/* This component will only render its children if it is the last slide and the carousel cannot scroll next */}
            <CarouselControlledShowComponent last={true}>
              <Link to="/login" className='w-full'>
                <Button variant="accent" className='w-full' size='rounded'>
                  Já tenho uma conta
                </Button>
              </Link>
            </CarouselControlledShowComponent>
          </footer>
        </Carousel>
      </FullScreenPage>
    </PublicRoute>
  );
}
