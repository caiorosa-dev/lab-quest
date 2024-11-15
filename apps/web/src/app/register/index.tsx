import { FullScreenPage } from '@/components/full-screen-page';
import { Button, ButtonIcon } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useZodForm } from '@/hooks/lib/use-zod-form';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/store/use-auth';
import { z } from 'zod';
import { toast } from 'sonner';
import { usePublicRoute } from '@/hooks/auth/use-public-route';

export const Route = createFileRoute('/register/')({
  component: () => <RegisterPage />,
});

const registerSchema = z.object({
  name: z.string().min(3, { message: 'O nome é obrigatório.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  password: z
    .string()
    .min(3, { message: 'A senha deve ter pelo menos 3 caracteres.' }),
  confirmPassword: z.string().min(3, { message: 'A senha deve ter pelo menos 3 caracteres.' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem.',
  path: ['confirmPassword'],
});

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const form = useZodForm({
    schema: registerSchema,
    handler: async (values) => {
      await register(values);
    },
    onSubmitSuccess: () => {
      toast.success('Registro realizado com sucesso. Redirecionando...');

      navigate({ to: '/' });
    },
    onSubmitError: () => {
      toast.error('Erro ao realizar o registro. Este email já está em uso.');
    },
  });

  usePublicRoute();

  return (
    <FullScreenPage className="flex justify-center items-center">
      <Form {...form}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Registrar</CardTitle>
            <CardDescription>
              Insira seu email e senha para criar uma conta.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="exemplo@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Confirme sua Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirme sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={form.isSubmitting || !form.formState.isValid}
              type="submit"
              className="w-full"
            >
              <ButtonIcon isLoading={form.isSubmitting} />
              Registrar
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </FullScreenPage>
  );
}