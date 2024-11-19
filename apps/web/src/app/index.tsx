import { createFileRoute } from '@tanstack/react-router';
import { FullScreenPage } from '@/components/full-screen-page';
import { usePublicRoute } from '@/hooks/auth/use-public-route';
import { Logo } from '@/components/logo';
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
} from '@/components/ui/carousel';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  usePublicRoute();

  return (
    <FullScreenPage>
      <Logo className="absolute top-12 left-1/2 -translate-x-1/2" />
      <div className="max-w-xl w-full flex justify-center items-center mx-auto py-12 px-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="w-full flex flex-col gap-32">
                  <img
                    src="/img/welcome/welcome_img_1.svg"
                    className="max-h-[230.08px] mx-auto"
                    alt=""
                  />
                  <div className="flex flex-col gap-6">
                    <h1 className="text-3xl font-bold text-center">
                      Aprenda Química de um jeito divertido
                    </h1>
                    <p className="text-center text-secondary-foreground">
                      A Lab Quest traz a química para você de uma maneira
                      acessível e envolvente, feita para todos os brasileiros.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="w-full flex flex-col gap-32">
                  <img
                    src="/img/welcome/welcome_img_1.svg"
                    className="max-h-[230.08px] mx-auto"
                    alt=""
                  />
                  <div className="flex flex-col gap-6">
                    <h1 className="text-3xl font-bold text-center">
                      Aprenda Química de um jeito divertido
                    </h1>
                    <p className="text-center text-secondary-foreground">
                      A Lab Quest traz a química para você de uma maneira
                      acessível e envolvente, feita para todos os brasileiros.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="w-full flex flex-col gap-32">
                  <img
                    src="/img/welcome/welcome_img_1.svg"
                    className="max-h-[230.08px] mx-auto"
                    alt=""
                  />
                  <div className="flex flex-col gap-6">
                    <h1 className="text-3xl font-bold text-center">
                      Aprenda Química de um jeito divertido
                    </h1>
                    <p className="text-center text-secondary-foreground">
                      A Lab Quest traz a química para você de uma maneira
                      acessível e envolvente, feita para todos os brasileiros.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-6 flex justify-center items-center">
            <CarouselIndicator />
          </div>
          <footer className='flex justify-center items-center mt-16'>
            <CarouselNext size="rounded" className='w-full' variant="default">
              Próximo
            </CarouselNext>
          </footer>
        </Carousel>
      </div>
    </FullScreenPage>
  );
}
