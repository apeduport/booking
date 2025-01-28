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

        createMany: procedure.input($Schema.ParentInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.createMany(input as any))),

        create: procedure.input($Schema.ParentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.create(input as any))),

        deleteMany: procedure.input($Schema.ParentInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.deleteMany(input as any))),

        delete: procedure.input($Schema.ParentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.delete(input as any))),

        findFirst: procedure.input($Schema.ParentInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).parent.findFirst(input as any))),

        findMany: procedure.input($Schema.ParentInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).parent.findMany(input as any))),

        findUnique: procedure.input($Schema.ParentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).parent.findUnique(input as any))),

        updateMany: procedure.input($Schema.ParentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.updateMany(input as any))),

        update: procedure.input($Schema.ParentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parent.update(input as any))),

        count: procedure.input($Schema.ParentInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).parent.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ParentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ParentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParentGetPayload<T>, Context>) => Promise<Prisma.ParentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ParentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ParentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParentGetPayload<T>, Context>) => Promise<Prisma.ParentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ParentFindFirstArgs, TData = Prisma.ParentGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ParentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParentFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ParentFindManyArgs, TData = Array<Prisma.ParentGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ParentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ParentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParentFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ParentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ParentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ParentFindUniqueArgs, TData = Prisma.ParentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ParentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ParentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ParentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ParentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParentGetPayload<T>, Context>) => Promise<Prisma.ParentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ParentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParentCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ParentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ParentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ParentCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ParentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ParentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
