/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.AccommodationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.createMany(input as any))),

        create: procedure.input($Schema.AccommodationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.create(input as any))),

        deleteMany: procedure.input($Schema.AccommodationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.deleteMany(input as any))),

        delete: procedure.input($Schema.AccommodationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.delete(input as any))),

        findFirst: procedure.input($Schema.AccommodationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).accommodation.findFirst(input as any))),

        findMany: procedure.input($Schema.AccommodationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).accommodation.findMany(input as any))),

        findUnique: procedure.input($Schema.AccommodationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).accommodation.findUnique(input as any))),

        updateMany: procedure.input($Schema.AccommodationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.updateMany(input as any))),

        update: procedure.input($Schema.AccommodationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).accommodation.update(input as any))),

        count: procedure.input($Schema.AccommodationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).accommodation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AccommodationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AccommodationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccommodationGetPayload<T>, Context>) => Promise<Prisma.AccommodationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AccommodationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AccommodationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccommodationGetPayload<T>, Context>) => Promise<Prisma.AccommodationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AccommodationFindFirstArgs, TData = Prisma.AccommodationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AccommodationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccommodationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccommodationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AccommodationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccommodationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccommodationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AccommodationFindManyArgs, TData = Array<Prisma.AccommodationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AccommodationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AccommodationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccommodationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AccommodationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AccommodationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AccommodationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AccommodationFindUniqueArgs, TData = Prisma.AccommodationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccommodationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccommodationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccommodationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccommodationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccommodationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccommodationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AccommodationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AccommodationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccommodationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccommodationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccommodationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccommodationGetPayload<T>, Context>) => Promise<Prisma.AccommodationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AccommodationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AccommodationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AccommodationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AccommodationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AccommodationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AccommodationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AccommodationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AccommodationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
